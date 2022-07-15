import ExpenseItem from "./ExpenseItem";
import "../UI/ExpenseList.css";

const ExpensesList = ({ items }: any) => {
  if (items.length === 0) {
    return (
      <p className="expenses-list__fallback">
        No Expenses Found in this date
      </p>
    );
  }

  return (
    <ul className="expenses-list">
      {items.map((expense: any) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount.toString()}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
