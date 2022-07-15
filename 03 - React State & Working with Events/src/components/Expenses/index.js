import React, {useState} from "react";
import "./index.css";
import ExpenseItem from "../ExpenseItem/";
import Card from "../Card";
import ExpenseFilter from "../ExpenseFilter";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const dropdownHandler = (year) =>{
    setFilteredYear(year);
  }
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter defaultSelect={filteredYear} onDropdownSelect={dropdownHandler} />
        {props.data.map((item, idx) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
