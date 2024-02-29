import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = (props) => {
    return (
        <View>
            <TextInput
                value={props.value}
                onChangeText={ct => {
                    props.onChangeText(ct);
                }}
                placeholder={props.placeholder}
                style={styles.textInput}
                autoCapitalize="none"
                onBlur={props.onBlur}
            />
            {props.errorMessage ? <Text style={styles.error}>{props.errorMessage}</Text> : null}
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'pink',
        height: 40,
        margin: 5,
    }, error: {
        color: 'red'
    }
})

export default Input