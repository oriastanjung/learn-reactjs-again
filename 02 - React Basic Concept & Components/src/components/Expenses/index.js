import React from "react";
import './index.css';
import ExpenseItem from '../ExpenseItem/index'
import Card from "../Card";
function index(props) {
  return (
    <Card className="expenses">
        {
            props.data.map((item,idx) => {
                return(
                    <ExpenseItem
                      title={item.title}
                      amount={item.amount}
                      date={item.date}
                    ></ExpenseItem>
                );
            })
        }
    </Card>
  );
}

export default index;
