import React, { useState } from "react";
import "./index.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const handlerOnChangeTitle = (event) => {
    setTitle(event.target.value);
    // setForm({
    //     ...form,
    //    title : event.target.value
    // }); this work fine, but not effective.. for every useState that depend
    // on previousState, its better to do it like this
    // setForm((prevState) =>{
    //     return {...prevState, title : event.target.value};
    // });
  };
  const handlerOnChangeAmount = (event) => {
    setAmount(event.target.value);
    // setForm({
    //     ...form,
    //    amount : event.target.value
    // });
  };
  const handlerOnChangeDate = (event) => {
    setDate(event.target.value);
    // setForm({
    //     ...form,
    //    date : event.target.value
    // });
  };
  const handlerChange = (e) => {
    // setForm({...form, [e.target.name] : e.target.value});
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: form.title,
      amount: form.amount,
      date: new Date(form.date),
    };
    // console.log(data);
    props.onSaveExpenses(data);
    setForm({ title: "", date: "", amount: "" });
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div className="nex-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            name="title"
            onChange={handlerChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            onChange={handlerChange}
            type="number"
            value={form.amount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            onChange={handlerChange}
            type="date"
            value={form.date}
            min="2022-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
