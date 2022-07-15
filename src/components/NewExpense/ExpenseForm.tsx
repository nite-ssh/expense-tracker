import { useState } from "react";
import "../UI/ExpenseForm.css";

const ExpenseForm = (
  { onSavedExpenseData }: any,
) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event: any) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event: any) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event: any) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    onSavedExpenseData(
      expenseData,
    );

    setUserInput(
      () => {
        return {
          enteredTitle: "",
          enteredAmount: "",
          enteredDate: "",
        };
      },
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
