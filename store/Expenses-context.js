import { createContext, useReducer } from "react";

const Expenses_Data = [
    {
        id: 'e1',
        description: "one kilo of tomato ",
        amount: 2,
        date: new Date("2022-05-07")
    },
    {
        id: 'e2',
        description: "J.R.R.Tolkeins books  ",
        amount: 850,
        date: new Date("2018-02-09")
    },
    {
        id: 'e3',
        description: "Pen",
        amount: 0.5,
        date: new Date("2021-12-22")
    },
    {
        id: 'e4',
        description: "Iphone 14",
        amount: 2399,
        date: new Date("2022-10-20")
    },
    {
        id: 'e5',
        description: "chair",
        amount: 30,
        date: new Date("2022-10-12")
    },
    {
        id: 'e6',
        description: "chair",
        amount: 30,
        date: new Date("2022-11-03")
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
})

function ExpensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'DELETE':
            return state.filter((expense) => expense.id != action.payload);
        case 'UPDATE':
            const updatedExpenseIndex = state.findIndex((expense) => expense.id == action.payload.id);
            const updatableExpense = state[updatedExpenseIndex];
            const updateItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatedExpenseIndex] = updateItem;
            return updatedExpenses;
        default:
            return state;
    }
};

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(ExpensesReducer, Expenses_Data);

    function addExpense(expensesData) {
        dispatch({ type: 'ADD', payload: expensesData })
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }
    function updateExpense(id, expensesData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expensesData } })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>
    )
}
export default ExpensesContextProvider;