import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#c31432',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textHeader: {
        color: 'white',
        paddingTop: 50,
        paddingBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})