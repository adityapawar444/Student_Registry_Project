function Dropdown(props) {
  const dropdownChangehandler = (event) => {
    //   console.log
    props.onChange(event.target.value);
  };

  return (
    <div>
      <label>{props.label}</label>
      <select value={props.value} onChange={dropdownChangehandler}>
        <option value="NONE">Select Course</option>
        {props.optionsData.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
