import { View, Text } from "react-native";

function ExpensesTotal({ period, expenses }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

    return (
        <View>
            <Text>{period}</Text>
            <Text>${expensesSum}</Text>
        </View>
    )
}

export default ExpensesTotal;