import { Text, StyleSheet, View } from "react-native";
import { useContext, useLayoutEffect } from "react";

import PrimaryButton from "../components/Details/PrimaryButton";
import InputText from "../components/Details/InputText";
import IconButton from "../components/Details/IconButton";
import { ExpensesContext } from "../store/Expenses-context";

function ManageExpensesScreen({ route, navigation }) {

    const expensesCtx = useContext(ExpensesContext)

    const editedExpenseId = route.params?.expenseId;
    const isEditedId = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditedId ? 'Edit Expenses' : 'Add EXpenses'
        })
    }, [navigation, isEditedId])

    function deleteExpense() {
        navigation.goBack()
        
        expensesCtx.deleteExpense(editedExpenseId)
    }

    return (
        <View style={styles.container}>
            < View style={styles.outerContainer} >
                <View style={styles.itemContainer}>
                    <Text style={styles.textStyle}>Name:</Text>
                    <InputText placeholder='name' />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textStyle} >Price:</Text>
                    <InputText placeholder='price' keyboardType="numeric" />
                </View>
            </View >

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Cancel</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                   { isEditedId ?  <PrimaryButton>Update</PrimaryButton> : <PrimaryButton>Add</PrimaryButton>}
                </View>
            </View>
            <View style={styles.iconButtonContainer}>
                {isEditedId && <IconButton name='trash'
                    size={35}
                    color='black'
                    onPress={deleteExpense} />}
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#white',
        marginHorizontal: 25,
    },
    outerContainer: {
        marginHorizontal: 10,
        marginTop: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        paddingBottom: 30,
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
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    iconButtonContainer: {
        alignItems : 'center',
    }
})

export default ManageExpensesScreen;