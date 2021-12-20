
import React from "react";
import NewStudentForm from "./components/Form/NewStudentForm";
import StudentList from "./components/Display/StudentList";
import { useState} from "react";


function App() {

const DATA = [];
const CoursesOffered = [
  {
    key: "HIS",
    value: "History",
  },
  {
    key: "GEO",
    value: "Geography",
  },
  {
    key: "SOC",
    value: "Society",
  },
  {
    key: "POL",
    value: "Polity",
  },
  {
    key: "SI",
    value: "Social Issues",
  },
];
  const [currData, setCurrData] = useState(DATA);

  const formSubmitHandler = (newStudent) =>{
    console.log(newStudent.course);
    
   CoursesOffered.forEach((courseObj) => {
     if(courseObj.key === newStudent.course){
       newStudent.course = courseObj.value;
     }
   })
   console.log(newStudent.course);
  
    setCurrData((prevData) => { return [newStudent, ...prevData];});
  }

  return (
    <React.Fragment>
      <NewStudentForm onFormSubmit={formSubmitHandler} dropdownData={CoursesOffered}></NewStudentForm>
      <StudentList data={currData}></StudentList>
    </React.Fragment>
  );
}

export default App;

