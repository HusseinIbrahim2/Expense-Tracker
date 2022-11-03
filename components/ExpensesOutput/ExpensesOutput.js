import ExpensesTotal from "./ExpensesTotal";
import ExpensesList from "./ExpensesList";
import { View, StyleSheet } from "react-native";

function ExpensesOutput({ expensesPeriod, Expenses }) {

    return (
        <View style={styles.container}>
            <ExpensesTotal period={expensesPeriod} expenses={Expenses} />
            <ExpensesList expenses={Expenses} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080020',

    },
})

export default ExpensesOutput;