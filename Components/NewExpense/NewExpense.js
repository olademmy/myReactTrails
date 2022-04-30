import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [editable, seteditable] = useState(false);
  const onClickHandler = () => {
    seteditable(true);
  };
  const onCancelHandler = () => {
    seteditable(false);
  };
  const saveDataHandler = (expensedata) => {
    const expenseData = { ...expensedata, id: Math.random.toString() };
    props.onAddData(expenseData);
    seteditable(false);
  };
  return (
    <div className="new-expense">
      {!editable && <button onClick={onClickHandler}>Add Expense</button>}
      {editable && (
        <ExpenseForm onSaveData={saveDataHandler} onCancel={onCancelHandler} />
      )}
    </div>
  );
}
export default NewExpense;
