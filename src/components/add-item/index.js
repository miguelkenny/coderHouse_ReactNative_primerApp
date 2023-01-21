import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

export const AddItem = ({ placeholder, onHandlerChange, task, buttonTitle, onHandlerSubmit }) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                autoComplete='off'
                autoCorrect={false}
                autoCapitalize='none'
                value={task}
                onChangeText={onHandlerChange}
            />
            <Button style={styles.buttonAdd} disabled={!task} title={buttonTitle} onPress={onHandlerSubmit} />
        </View>
    )
}