import { Modal, View, Text, Button } from 'react-native';

import { styles } from "./styles";

export const AddModal = ({ isModalVisible, onHandleCancel, onHandleDelete, selectedTask }) => {

    return (
        <Modal visible={isModalVisible} animationType='slide'>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Detalle</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailMessage}>¿Deseas eliminar esta taréa?</Text>
                    <Text style={styles.modalSelectedTask} >{selectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonsContainer}>
                    <Button
                        title='Cancelar'
                        onPress={onHandleCancel}
                    />

                    <Button
                        title='Eliminar'
                        color='red'
                        onPress={onHandleDelete}
                    />
                </View>
            </View>
        </Modal>
    )
}