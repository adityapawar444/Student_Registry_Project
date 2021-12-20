import TextInput from "./TextInput";
import { useState } from "react";

import Card from "../Display/Card";
import Button from "../Display/Button";
import Wrapper from "../Helper/Wrapper";
import ErroModal from "../Display/ErrorModal";
import Dropdown from "./Dropdown";

import styles from "./NewStudentForm.module.css";

function NewStudentForm(props) {
  const [firstName, setfirstName] = useState("");

  const [lastName, setlastName] = useState("");

  const [course, setCourse] = useState("NONE");

  const [error, setError] = useState();

  const submitButtonHandler = (event) => {
    event.preventDefault();

    if (firstName.trim().length === 0 || lastName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        content: "Fields cannot be empty!!!",
      });
      return;
    }

    if(course === "NONE"){
      setError({
        title: "Invalid Input",
        content: "Please Select a Course!!!",
      });
      return;
    }

    const student = {
      key: Math.random().toString(),
      firstName: firstName,
      lastName: lastName,
      course: course,
    };

    setfirstName("");
    setlastName("");
    setCourse("NONE");

    props.onFormSubmit(student);
  };

  const firstNameChangeHandler = (changedInput) => {
    setfirstName(changedInput);
  };

  const lastNameChangeHandler = (changedInput) => {
    setlastName(changedInput);
  };

  const courseChangehandler = (changedInput) => {
    setCourse(changedInput);
  };

  const errorhandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            label="First Name"
            changeEvent={firstNameChangeHandler}
            value={firstName}
          ></TextInput>
          <TextInput
            label="Last Name"
            changeEvent={lastNameChangeHandler}
            value={lastName}
          ></TextInput>
          <Dropdown
            value={course}
            optionsData={props.dropdownData}
            label="Select Course"
            onChange={courseChangehandler}
          />
          <Button type="submit">Add Student</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default NewStudentForm;
