import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
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
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      padding: 16,
      color: '#FFFF',
      fontSize: 16,
      marginRight: 12
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      color: '#FFFF',
      fontSize: 24,
    },
    form: {
      width: '100%',
      flexDirection: "row",
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#FFFF',
      fontSize: 14,
      textAlign: "center"
    }
  });

  export default Style;