import "./ExpenseItem.css";

import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem: React.FC<{ date: any; title: String; amount: String }> = (
  { date, title, amount },
) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
