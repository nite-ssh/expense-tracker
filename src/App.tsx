import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyData = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 248.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e2",
    title: "Morgtage",
    amount: 22248.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e3",
    title: "College Bill",
    amount: 22948.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "guitar Lessons",
    amount: 2248.67,
    date: new Date(2022, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);
  const SavedExpensesDetails: Function = (savedDetails: any) => {
    setExpenses([savedDetails, ...dummyData]);
  };

  const onDelete = (value: any) => {
    setExpenses(expenses.filter((expense) => {
      return (
        expense.title !== value.title
      );
    }));
  };

  return (
    <div className="App">
      <NewExpense savedExpenses={SavedExpensesDetails} />
      <Expenses expenses={expenses} onDelete={onDelete} />
    </div>
  );
}

export default App;
