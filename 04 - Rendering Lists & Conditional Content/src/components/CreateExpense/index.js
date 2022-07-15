import React, { useState } from "react";
import "./index.css";
import ExpenseForm from "../ExpenseForm";

function CreateExpense(props) {
  const [clickedAdd, setClickedAdd] = useState(false);
  
  const saveExpensesHandler = (dataEntered) => {
    const expenseData = {
      ...dataEntered,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onSaveExpenseDataParent(expenseData);
    setClickedAdd(false);
  };
  
  const handlerClickAddExpense = () => {
    setClickedAdd(!clickedAdd);
  };
  const handlerStopAddExpense = () => {
    setClickedAdd(false);
  };
  
  return (
    <div className="new-expense">
      {clickedAdd === false && (
        <button onClick={handlerClickAddExpense}>Add New Expense</button>
      )}
      {clickedAdd && (
        <ExpenseForm
          onStopAddExpense={handlerStopAddExpense}
          onSaveExpenses={saveExpensesHandler}
        />
      )}
    </div>
  );
}

export default CreateExpense;
