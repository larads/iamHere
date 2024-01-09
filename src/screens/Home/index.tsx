import { Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import  Style from './styles'

import { Participant } from '../../components/Participant';

export default function Home() {
  const participants = ['Thiago', 'Marlison', 'Ewila','Ingrid', 'Josias','Victor', 'Gabriel', 'Wesley','Mirlene']

  function handleParticipanAdd() {
    console.log('cliquei aq')
  }

  function handleParticipanRemove(name: string) {
    console.log(`vai remover o participante ${name}`)
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
        />

        <TouchableOpacity style={Style.button} onPress={handleParticipanAdd}>
          <Text style={Style.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant 
            key={participant}
            name={participant}
            onRemove={() => handleParticipanRemove("Thiago")}
            />
            ))
          }
      </ScrollView>
    </View>
  )
}
