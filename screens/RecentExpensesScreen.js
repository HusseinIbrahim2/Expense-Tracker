import { useContext, useLayoutEffect } from "react";

import IconButton from "../components/Details/IconButton";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/Expenses-context";
import { getDateMinusDays } from "../util/date";

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

    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const Last7DaysExpenses = getDateMinusDays(today, 7)
        return expense.date >= Last7DaysExpenses && expense.date <= today;
    })

    return (
        <>
            <ExpensesOutput expensesPeriod="Last 7 days" Expenses={recentExpenses} />
        </>
    )
}

export default RecentExpensesScreen;