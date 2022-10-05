import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import AddExpenseButton from "./AddExpenseButton";
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  }

  const showExpenseFormHandler = (isVisible) => {
    setShowForm(isVisible);
  }


  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={showExpenseFormHandler}/>
      ) : (
        <AddExpenseButton onButtonClick={showExpenseFormHandler} />
      )}
    </div>
  );
}

export default NewExpense;