import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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

  const SavedExpensesDetails: Function = (savedDetails: any) => {
    console.log(savedDetails);
    console.log("from appjs");
  };

  return (
    <div className="App">
      <NewExpense savedExpenses={SavedExpensesDetails} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
