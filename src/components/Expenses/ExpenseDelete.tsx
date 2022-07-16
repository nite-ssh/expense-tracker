import Card from "../Global/Card";
const ExpenseDelete = ({ onDelete }: any) => {
  const deleteTask = () => {
    onDelete();
  };
  return (
    <Card class_name="expense-item">
      <i className="fas fa-trash" onClick={deleteTask}></i>
    </Card>
  );
};

export default ExpenseDelete;
