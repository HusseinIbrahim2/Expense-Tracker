import { PureComponent } from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getDate } from "../../util/date";

function ExpensesItem({ description, amount, date, id }) {

    const navigation = useNavigation();

    function expensesPressHandler() {
        navigation.navigate('ManageExpenses', { expenseId: id })
    }

    return (
        <Pressable onPress={expensesPressHandler} style={({ pressed }) => pressed && styles.pressed} >
            <View style={styles.outerContainer}>
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
        </Pressable>
    )
}
const styles = StyleSheet.create({
    outerContainer: {
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 25,
        backgroundColor: '#d183d1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 4,
    },
    amountContainer: {
        borderRadius: 5,
        backgroundColor: 'lightgreen',
        paddingHorizontal: 12,
        paddingVertical: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        overflow: 'hidden',
    },
    pressed: {
        opacity: 0.75,
    }
})

export default ExpensesItem;