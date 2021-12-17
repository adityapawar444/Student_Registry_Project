function TextInput(props) {
  const textInputChangeHandler = (event) => {
    props.changeEvent(event.target.value);
  };
 
  if (props.ph.length === 0) {
    return (
      <div>
        <label>{props.label} : </label>
        <input
          type="text"
          placeholder="Type Here...."
          value=""
          onChange={textInputChangeHandler}
        ></input>
      </div>
    );
  }

  return (
    <div>
      <label>{props.label} : </label>
      <input
        type="text"
        value={props.ph}
        onChange={textInputChangeHandler}
      ></input>
    </div>
  );
}

export default TextInput;
