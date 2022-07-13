import "../UI/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (
  { savedExpenses }: any,
) => {
  const saveExpenseHandler = (enteredDetail: Object) => {
    const expenseDetail = {
      ...enteredDetail,
      id: Math.random().toString(),
    };

    savedExpenses(expenseDetail);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSavedExpenseData={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
