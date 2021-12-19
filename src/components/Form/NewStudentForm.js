import TextInput from "./TextInput";
import { useState } from "react";

import Card from "../Display/Card";
import Button from "../Display/Button";

import styles from './NewStudentForm.module.css'

function NewStudentForm(props) {
  const [currName, setCurrName] = useState("");

  const [currClass, setCurrClass] = useState("");

  const submitButtonHandler = (event) => {
    event.preventDefault();

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
    //setIsNameReset(false);

    setCurrName(changedInput);
  };

  const classChangeHandler = (changedInput) => {
   // setIsClassReset(false);
    setCurrClass(changedInput);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitButtonHandler}>
        <TextInput
          label="Name"
          changeEvent={nameChangeHandler}
          ph={currName}
          //  reset={isNameReset}
        ></TextInput>
        <TextInput
          label="Class"
          changeEvent={classChangeHandler}
          ph={currClass}
          ///  reset={isClassReset}
        ></TextInput>
        <Button type="submit">Add Student</Button>
      </form>
    </Card>
  );
}

export default NewStudentForm;
