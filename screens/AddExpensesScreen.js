import { Text, StyleSheet, View } from "react-native";

import InputText from "../components/Details/InputText";

function AddExpensesScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.outerContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.textStyle}>Name:</Text>
                    <InputText placeholder='name'  />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textStyle} >Price:</Text>
                    <InputText placeholder='price' keyboardType="numeric"/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    outerContainer: {
        marginLeft: 10,
        marginTop: 40,
        borderBottomColor: 'black',
        borderBottomWidth:3,
        paddingBottom: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        marginRight: 10,
        fontSize: 20,
    }
})

export default AddExpensesScreen;