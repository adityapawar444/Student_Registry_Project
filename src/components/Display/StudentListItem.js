function StudentListItem(props){

  console.log(props.input);

      
    return (
      <div>
        <p>
         Full Name : {props.input.firstName} {props.input.lastName}
        </p>
        <p>Course : {props.input.course}</p>
      </div>
    );
}

export default StudentListItem;