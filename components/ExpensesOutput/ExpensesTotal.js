import { View, Text, StyleSheet } from "react-native";

function ExpensesTotal({ period, expenses }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

    return (
        <View style={styles.outerontainer}>
            <View style={styles.innerContainer}>
                <Text>{period}</Text>
                <Text>€{expensesSum.toFixed(2)}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    outerontainer: {
        marginTop: 20,
        margin: 15,
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