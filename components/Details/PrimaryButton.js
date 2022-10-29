import { Pressable, View, StyleSheet, Text } from "react-native";

function PrimaryButton({ onPressing, children }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={onPressing}>
                <Text style={styles.buttonText}>{children} </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin:10,
        borderRadius: 12,
        marginBottom: 30,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 26,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
})
export default PrimaryButton;