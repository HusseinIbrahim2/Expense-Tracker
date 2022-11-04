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
        margin: 10,
        borderRadius: 12,
        marginBottom: 30,
        overflow: 'hidden',
        marginHorizontal: 25,
    },
    buttonInnerContainer: {
        backgroundColor: 'grey',
        paddingVertical: 8,
        paddingHorizontal: 3,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
    },
})
export default PrimaryButton;