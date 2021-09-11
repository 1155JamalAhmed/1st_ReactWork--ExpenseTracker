import React, { useState } from "react";
import Card from "../Ui/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const deleteExpenseHandler = (itemId) => {
    props.deleteExpenseItem(itemId);
  }
  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} onExpenseDelete={deleteExpenseHandler}/>
      </Card>
    </div>
  );
};

export default Expenses;
