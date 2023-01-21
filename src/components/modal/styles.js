import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    modalDetailContainer: {
        paddingVertical: 20,
        boxShadow: '10px 10px 5px -6px rgba(0,0,0,0.3)',
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