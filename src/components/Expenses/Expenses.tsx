import Card from "../Global/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
import "../UI/Expenses.css";

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
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={setFilteredYear}
      />

      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount.toString()}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
