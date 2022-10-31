import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

import IconButton from "../components/Details/IconButton";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpensesScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (<IconButton
                    name='add'
                    size={25}
                    color='black'
                    onPress={() => navigation.navigate('ManageExpenses')} />
                );
            },
        }
        );
    }, [navigation]);

    return (
        <>
       <ExpensesOutput expensesPeriod="Last 7 days" />
        </>
    )
}

export default RecentExpensesScreen;