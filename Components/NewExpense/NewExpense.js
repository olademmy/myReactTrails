import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const saveDataHandler = (expensedata) => {
    const expenseData = { ...expensedata, id: Math.random.toString() };
    props.onAddData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
}
export default NewExpense;
