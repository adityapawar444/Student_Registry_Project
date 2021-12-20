
import StudentListItem from "./StudentListItem";
import Card from "./Card";

import classes from './StudentList.module.css';

function StudentList(props) {

    if(props.data.length === 0){
        return (
          <Card className={classes.users}>
            <ul>
              <li>No records Found</li>
            </ul>
          </Card>
        );
    }
  return (
    <Card className={classes.users}>
      <ul>
        {props.data.map((studentData) => (
          <li key={studentData.key}>
            <StudentListItem input={studentData}></StudentListItem>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default StudentList;
