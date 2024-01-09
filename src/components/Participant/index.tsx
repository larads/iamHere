import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
}

export function Participant(props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {props.name}
            </Text>

            <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
        </View>
    )
}