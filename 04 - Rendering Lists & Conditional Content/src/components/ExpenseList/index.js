import React from 'react'
import ExpenseItem from '../ExpenseItem';
import './index.css';

function ExpenseList(props) {
    
    
    if(props.data.length === 0){
        return <h2 className='expenses-list__fallback'>No Data Found</h2>
    }
  return (
    <ul className='expenses-list'>
        {props.data.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          );
        })}
    </ul>
  )
}

export default ExpenseList