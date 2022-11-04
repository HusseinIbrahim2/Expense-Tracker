import { Text, StyleSheet, View } from "react-native";
import { useContext, useLayoutEffect } from "react";

import PrimaryButton from "../components/Details/PrimaryButton";
import InputText from "../components/Details/InputText";
import IconButton from "../components/Details/IconButton";
import { ExpensesContext } from "../store/Expenses-context";

function ManageExpensesScreen({ route, navigation }) {

    const expensesCtx = useContext(ExpensesContext)

    const editedExpenseId = route.params?.expenseId;
    const isEdited = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdited ? 'Edit Expenses' : 'Add EXpenses'
        })
    }, [navigation, isEdited])

    function deleteExpense() {
        expensesCtx.deleteExpense(editedExpenseId)
        navigation.goBack()
    }
    function cancelManage() {
        navigation.goBack()
    }
    function confirmHandler() {
        if (isEdited == true) {
            expensesCtx.updateExpense(
                editedExpenseId,
                {
                    description: 'Testtttt',
                    amount: 715,
                    date: new Date('2019-08-19')
                }
            )
        }
        else {
            expensesCtx.addExpense({
                description: 'Tessttt2',
                amount: 1999,
                date: new Date('2015-05-09')
            })
        }
        navigation.goBack()
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
                    <PrimaryButton onPressing={cancelManage} >Cancel</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPressing={confirmHandler} >{isEdited ? 'Update' : 'Add'}</PrimaryButton>
                </View>
            </View>
            <View style={styles.iconButtonContainer}>
                {isEdited &&
                    <IconButton
                        name='trash'
                        size={35}
                        color='black'
                        onPress={deleteExpense} />
                }
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
        alignItems: 'center',
    }
})

export default ManageExpensesScreen;