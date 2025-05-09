import { create } from "zustand";

// interface Expense {
//   id: number;
//   description: string;
//   amount: number;
// }

// interface ExpenseStore {
//   expenses: Expense[];
//   addExpense: (expense: Expense) => void;
//   removeExpense: (id: number) => void;
// }

const useStore = create((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));

export default useStore;