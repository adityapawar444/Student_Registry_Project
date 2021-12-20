import TextInput from "./TextInput";
import { useState } from "react";

import Card from "../Display/Card";
import Button from "../Display/Button";
import ErroModal from "../Display/ErrorModal";

import styles from './NewStudentForm.module.css'

function NewStudentForm(props) {
  const [currName, setCurrName] = useState("");

  const [currClass, setCurrClass] = useState("");

  const [error,setError] = useState();

  const submitButtonHandler = (event) => {
    event.preventDefault();

    if(currName.trim().length === 0 || currClass.trim().length === 0){
      setError({
        title:"Invalid Input",
        content:"Fields cannot be empty!!!"
      })
      return;
    }

    const student = {
      key: Math.random().toString(),
      name: currName,
      class: currClass,
    };

    setCurrName("");
    setCurrClass("");

    props.onFormSubmit(student);

  };

  const nameChangeHandler = (changedInput) => {
    setCurrName(changedInput);
  };

  const classChangeHandler = (changedInput) => {
    setCurrClass(changedInput);
  };

const errorhandler = () =>{
  setError(null);
}


  return (
    <div>
      {error && (
        <ErroModal
          title={error.title}
          content={error.content}
          onModalClick={errorhandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitButtonHandler}>
          <TextInput
            label="Name"
            changeEvent={nameChangeHandler}
            value={currName}
            //  reset={isNameReset}
          ></TextInput>
          <TextInput
            label="Class"
            changeEvent={classChangeHandler}
            value={currClass}
            ///  reset={isClassReset}
          ></TextInput>
          <Button type="submit">Add Student</Button>
        </form>
      </Card>
    </div>
  );
}

export default NewStudentForm;
