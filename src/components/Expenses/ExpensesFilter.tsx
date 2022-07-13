import "../UI/ExpenseFilter.css";

interface Props {
  selected: any;
  onChangeFilter: any;
}

const ExpensesFilter = (
  { onChangeFilter, selected }: Props,
) => {
  const dropdownChangeHandler = (event: any) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label htmlFor="">
          Filter By year
        </label>

        <select
          value={selected}
          onChange={dropdownChangeHandler}
          id=""
          name=""
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
