import { View, StyleSheet, Text } from 'react-native';

function SubTitle({ text, number }) {
    return (
        <View style={styles.outerontainer}>
            <View style={styles.innerContainer}>
                <Text >{text}</Text>
                <Text>${number}</Text>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    outerontainer: {
        marginTop: 20,
        margin : 15,
        borderRadius: 5,
        backgroundColor: 'lightgreen'
    },
    innerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 8,
    }
})

export default SubTitle;