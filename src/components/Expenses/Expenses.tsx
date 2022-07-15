import Card from "../Global/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
import "../UI/Expenses.css";
import ExpenseChart from "./ExpenseChart";

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
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredExpense = expenses.filter((expense) =>
    expense.date.getFullYear().toString() === filteredYear
  );

  const onEmpty = (
    <p className="expenses-empty">Sorry, No Expense Recorded for this date.</p>
  );

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
            />
          )
        );
      })}
    </Card>
  );
};

export default Expenses;
