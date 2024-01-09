import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import  Style from './styles'

import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipanAdd() {
    if(participants.includes(participantName)) {
       return Alert.alert(
        "Participante Existe", "Ja Existe participante com esse nome")
    }
    
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');
  }

  function handleParticipanRemove(name: string) {
    Alert.alert(
      "Remover ",`Deseja Remover o/a participante ${name} ?`, [
        {
          text: "Sim",
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
        },
        {
          text: "Não",
          style:'cancel'
        }
      ])
  }

  return (
    <View style={Style.container}>
      <Text style={Style.eventName}>
        Mariana
      </Text>

      <Text style={Style.eventDate}>
        Sexta, 12 de Janeiro de 2024
      </Text>

      <View style={Style.form}>
        <TextInput style={Style.input} 
          placeholder='Nome do Participante'
          placeholderTextColor='#6B6b6B'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={Style.button} onPress={handleParticipanAdd}>
          <Text style={Style.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipanRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={Style.listEmptyText}>
            Nenhum participante no momento
          </Text>
        )}
      />
    </View>
  )
}
