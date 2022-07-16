import "../UI/ExpenseItem.css";
import Card from "../Global/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDelete from "./ExpenseDelete";
import { useState } from "react";

interface Props {
  date: Date;
  title: String;
  amount: String;
  onClick?: any;
}

const ExpenseItem = (
  { date, title, amount, onClick }: Props,
) => {
  const [deleteList, setDeleteList] = useState({ title });

  const onDelete = () => {
    onClick(deleteList);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <ExpenseDelete onDelete={onDelete} />
      </div>
    </Card>
  );
};

export default ExpenseItem;
