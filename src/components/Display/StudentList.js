
import StudentListItem from "./StudentListItem";

function StudentList(props) {

    if(props.data.length === 0){
        return <p>No records Found</p>
    }
  return (
    <div>
      {props.data.map((studentData) => (
        <StudentListItem
          key={studentData.key}
          input={studentData}
        ></StudentListItem>
      ))}
    </div>
  );
}

export default StudentList;
