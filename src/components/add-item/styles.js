import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginHorizontal: 20,
        padding: 6,
    },
    input: {
        width: '75%',
        borderBottomColor: '#626893',
        borderBottomWidth: 1,
        height: 40,
        color: '#212121'
    },
    buttonAdd: {
        borderRadius: 50,
        padding: 30,
        margin: 10,
    }
})