import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteExpenseItemHandler = (event) => {
    props.onDelete(event.target.parentElement.parentElement.id);
  }
  return (
    
    <li>
      <Card className="expense-item" id={props.id}>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <button className='delete-button' onClick={deleteExpenseItemHandler}>Delete</button>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
