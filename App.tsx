import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Mariana</Text>
      <Text style={styles.eventDate}>Sexta, 12 de Janeiro de 2024</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000',
    padding: 24
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  }
});