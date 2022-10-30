import ExpensesTotal from "./ExpensesTotal";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expensesPeriod, totalExpenses }) {

    const Expenses_Data = [
        {
            id: 'e1',
            description: "one kilo of tomato ",
            amount: 2,
            date : new Date("2022-05-07")
        },
        {
            id: 'e2',
            description: "J.R.R.Tolkeins books ",
            amount: 850,
            date : new Date("2018-02-09")
        },
        {
            id: 'e3',
            description: "Pen",
            amount: 0.5,
            date : new Date("2021-12-22")
        },
        {
            id: 'e4',
            description: "Iphone 14",
            amount: 1399,
            date : new Date("2022-10-20")
        },
        {
            id: 'e5',
            description: "chair",
            amount: 30,
            date : new Date("2022-10-12")
        },

    ];
    return(

    <>
        <ExpensesTotal period={expensesPeriod} expenses={Expenses_Data} />
        <ExpensesList expenses={Expenses_Data} />
    </>
    )
}

export default ExpensesOutput;