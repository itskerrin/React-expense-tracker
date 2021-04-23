import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

// filter arrays with the filer method

// dont go too complicated - dont change expenses array - derive a
// new array based on the expenses array which is a subset of the array
// for the chosen filter
