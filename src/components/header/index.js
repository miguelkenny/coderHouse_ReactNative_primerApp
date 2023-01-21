import { View, Text } from "react-native";

import { styles } from "./styles";

export const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textHeader} >Mis Tareas Del Día</Text>
        </View>
    )
}