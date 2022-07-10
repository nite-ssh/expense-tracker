import Expenses from "./components/Expenses";

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

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
