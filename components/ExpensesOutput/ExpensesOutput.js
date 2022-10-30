import ExpensesTotal from "./ExpensesTotal";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expensesPeriod, totalExpenses }) {
    <>
        <ExpensesTotal period={expensesPeriod} expenses={totalExpenses} />
        <ExpensesList />
    </>
}

export default ExpensesOutput;