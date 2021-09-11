import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found.</h2>;
  }
  const onDeleteExpenseItemHandler = (itemId) => {
    props.onExpenseDelete(itemId);
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={onDeleteExpenseItemHandler}

        />
      ))}
    </ul>
  );
};

export default ExpenseList;
