import { View, Text, StyleSheet } from "react-native";

function ExpensesTotal({ expenses, period }) {
    const expensesSum = expenses.reduce((sum, expense) => {
      return sum + expense.amount;
    }, 0);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Text>{period}</Text>
                <Text>€{expensesSum.toFixed(2)}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    outerContainer: {
        marginTop: 20,
        marginBottom: 4,
        marginHorizontal: 25,
        borderRadius: 5,
        backgroundColor: 'lightgreen'
    },
    innerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 8,
    }
})
export default ExpensesTotal;