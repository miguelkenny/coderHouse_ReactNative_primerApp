import { Modal, View, Text, Button } from 'react-native';

import { styles } from "./styles";

export const AddModal = ({ isModalVisible, onHandleCancel, onHandleDelete, selectedTask }) => {

    return (
        <Modal visible={isModalVisible} animationType='slide'>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Task Details</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
                    <Text style={styles.modalSelectedTask} >{selectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonsContainer}>
                    <Button
                        title='Cancel'
                        onPress={onHandleCancel}
                    />

                    <Button
                        title='Delete'
                        color='red'
                        onPress={onHandleDelete}
                    />
                </View>
            </View>
        </Modal>
    )
}