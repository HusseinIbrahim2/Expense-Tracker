import { FlatList, Text, View, StyleSheet } from "react-native";

function renderExpensesItem(itemData) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Text>{itemData.item.description}</Text>
            </View>
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
        padding: 8,
    }
})

export default ExpensesList;