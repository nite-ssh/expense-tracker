import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

interface expensesProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface Props {
  expenses: expensesProps[];
}

const Expenses = (
  { expenses }: Props,
) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount.toString()}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount.toString()}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount.toString()}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount.toString()}
        date={expenses[3].date}
      />
    </div>
  );
};

export default Expenses;
