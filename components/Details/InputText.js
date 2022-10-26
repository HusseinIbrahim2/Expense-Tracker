import { TextInput, View ,StyleSheet } from "react-native";

function InputText({placeholder,keyboardType}) {
    return (
        <View>
            <TextInput style={styles.input} placeholder = {placeholder} keyboardType={keyboardType} ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
    width: 120,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
      },
})

export default InputText;