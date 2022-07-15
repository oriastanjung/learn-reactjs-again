import React from 'react';
import './index.css';
import ExpenseForm from '../ExpenseForm';

function CreateExpense(props) {
  const saveExpensesHandler = (dataEntered) =>{
    const expenseData = {
      ...dataEntered, 
      id: Math.random().toString()
    };
    // console.log(expenseData);
    props.onSaveExpenseDataParent(expenseData);
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenses ={saveExpensesHandler}/>
    </div>
  )
}

export default CreateExpense;