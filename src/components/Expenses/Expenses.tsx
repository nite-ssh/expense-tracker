import Card from "../Global/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
import "../UI/Expenses.css";
import ExpenseChart from "./ExpenseChart";

const Expenses = (
  { expenses, onDelete }: any,
) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredExpense = expenses.filter((expense: any) =>
    expense.date.getFullYear().toString() === filteredYear
  );

  const onEmpty = (
    <p className="expenses-empty">Sorry, No Expense Recorded for this date.</p>
  );

  const deleteFromExpense = (deleteList: any) => {
    onDelete(deleteList);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={setFilteredYear}
      />

      <ExpenseChart expenses={filteredExpense} />

      {filteredExpense.length === 0 && onEmpty}
      {filteredExpense.map((expense: any) => {
        return (
          filteredExpense.length > 0 &&
          (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount.toString()}
              date={expense.date}
              onClick={deleteFromExpense}
            />
          )
        );
      })}
    </Card>
  );
};

export default Expenses;
