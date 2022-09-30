import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const expenseFilterHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={expenseFilterHandler}/>
        <ExpenseItem item={props.items[0]}></ExpenseItem>
        <ExpenseItem item={props.items[1]}></ExpenseItem>
        <ExpenseItem item={props.items[2]}></ExpenseItem>
        <ExpenseItem item={props.items[3]}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;