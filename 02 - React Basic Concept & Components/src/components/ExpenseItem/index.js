import React from 'react';
import './index.css';
import ExpenseItemDate from './ExpenseItemDate/index'
import Card from '../Card';
function index(props) {
  // const expenseDate = new Date(2022, 2, 19).toISOString();
  // const expenseTitle = 'Car Insurance';
  // const expensePrice = 294.5
  
  return (
    // <div className='expense-item'>
    //   <div>March 19 2022</div>
    //   <div className='expense-item__description'>
    //     <h2>Car Insurance</h2>
    //     <div className='expense-item__price'>$294.5</div>
    //   </div>
    // </div> // not yet dynamic
    // try more dynamic
    // calling variable or any javascript code inside the {}
    <Card className='expense-item'>
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

export default index;