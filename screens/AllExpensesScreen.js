import { useContext, useLayoutEffect } from "react";
import { View, Text } from "react-native";

import IconButton from "../components/Details/IconButton";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/Expenses-context";

function AllExpensesScreen({ navigation }) {

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

    const expensesCtx = useContext(ExpensesContext);

    return (
        <>
            <ExpensesOutput expensesPeriod="Total" Expenses={expensesCtx.expenses} />
        </>
    )
}

export default AllExpensesScreen;