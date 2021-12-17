import NewStudentForm from "./components/Form/NewStudentForm";
import StudentList from "./components/Display/StudentList";
import { useState } from "react";

const DATA = [];

function App() {

const DATA = [];
  const [currData, setCurrData] = useState(DATA);

  const formSubmitHandler = (newStudent) =>{
    setCurrData((prevData) => { return [newStudent, ...prevData];});
  }

  return (
    <div>
      <NewStudentForm onFormSubmit={formSubmitHandler}></NewStudentForm>
      <StudentList data={currData}></StudentList>
    </div>
  );
}

export default App;

