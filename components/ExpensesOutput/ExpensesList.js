import { FlatList, Text, View, StyleSheet } from "react-native";

function renderExpensesItem(itemData) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                    <Text>{itemData.item.description}</Text>
                    <Text>€{itemData.item.amount.toFixed(2)}</Text>
            </View>
                <Text>{itemData.item.date.toDateString()}</Text>
        </View>
    )
}

function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpensesItem}
            keyExtractor={(item) => item.id}
        />
    )
}
const styles = StyleSheet.create({
    outerContainer: {
        // marginVertical: 25,
        marginHorizontal: 20,
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#9374c1'
    },
    innerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})

export default ExpensesList;