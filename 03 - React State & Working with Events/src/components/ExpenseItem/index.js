import React, { useState  } from 'react';
import './index.css';
import ExpenseItemDate from './ExpenseItemDate/'
import Card from '../Card';

function ExpenseItem(props) {

  const [ title, setTitle] = useState(props.title);

  const clickHandler = ()=>{
    setTitle('new Title Updated');
    console.log(title); // it will show the past title, because setTitle have schedule
                        // to update after the function done.
  }
  return (
    <Card className='expense-item'>
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem;