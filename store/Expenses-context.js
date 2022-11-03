import { createContext, useReducer } from "react";

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
            return updatableExpense;
        default:
            return state;
    }

};

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(ExpensesReducer, expensesState);

    function addExpense(expensesData) {
        dispatch({ type: 'ADD', payload: expensesData })
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }
    function updateExpense(id, expensesData) {
        dispatch({ type: 'UPDATE', id: id, payload: expensesData })
    }

    return (
        <Managed.Provider>{children}</Managed.Provider>
    )
}
export default ExpensesContextProvider;