import React from "react";
import './AddExpenseButton.css';

const AddExpenseButton = (props) => {

  const addExpenseHandler = () => {
    props.onButtonClick(true);
  }

  return (
    <div className="add-expense">
      <button type="submit" onClick={addExpenseHandler}>Add New Expense</button>
    </div>
  );
}

export default AddExpenseButton;