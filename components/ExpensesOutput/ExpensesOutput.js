import ExpensesTotal from "./ExpensesTotal";
import ExpensesList from "./ExpensesList";
import { View, StyleSheet } from "react-native";

function ExpensesOutput({ expensesPeriod, totalExpenses }) {

    return (
        <View style={styles.container}>
            <ExpensesTotal period={expensesPeriod} expenses={Expenses_Data} />
            <ExpensesList expenses={Expenses_Data} />
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