import React, { useState } from "react";
import "./index.css";
import Card from "../Card";
import ExpenseFilter from "../ExpenseFilter";
import ExpenseList from "../ExpenseList";
import ExpensesChart from "../ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const dropdownHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredData = props.data.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultSelect={filteredYear}
          onDropdownSelect={dropdownHandler}
        />
        <ExpensesChart expensesData={filteredData}/>
        <ExpenseList data={filteredData} />
      </Card>
    </div>
  );
}

export default Expenses;
