import { View, Pressable, StyleSheet, Text } from "react-native";

import { getDate } from "../../util/date";

function ExpensesItem({ description, amount, date }) {
    return (
        <Pressable>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.descriptionText}>
                            {description}
                        </Text>
                        <Text>{getDate(date)}</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text>€{amount.toFixed(2)}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    outerContainer: {
        marginHorizontal: 25,
        marginBottom: 12,
        margin: 5,
        borderRadius: 6,
        backgroundColor: '#9374c1',
        elevation: 10,
        shadowColor: '#ffffff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        padding: 8,
        justifyContent: 'space-between',
    },
    innerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal:2,
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    amountContainer: {
        borderRadius: 5,
        backgroundColor: 'lightgreen',
        paddingHorizontal: 12,
        paddingVertical: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 90,
    },
})

export default ExpensesItem;