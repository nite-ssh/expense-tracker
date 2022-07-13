import "../UI/ExpenseItem.css";
import Card from "../Global/Card";
import ExpenseDate from "./ExpenseDate";

interface Props {
  date: Date;
  title: String;
  amount: String;
}
const ExpenseItem = (
  { date, title, amount }: Props,
) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
