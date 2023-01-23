import { StyleSheet } from "react-native";
import { AddItem } from "./components/add-item";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContainer: {
        marginHorizontal: 20,
        marginTop: 40
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fffggg',
        marginBottom: 10,
        borderRadius: 10,
    },
    itemList: {
        marginLeft: 8,
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },

    checkboxBase: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: 'red',
    }
});