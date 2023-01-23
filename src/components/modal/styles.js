import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        elevation: 3,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    modalDetailContainer: {
        paddingVertical: 20,
    },
    modalDetailMessage: {
        fontSize: 16,
        color: '#212121'
    },
    modalSelectedTask: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})