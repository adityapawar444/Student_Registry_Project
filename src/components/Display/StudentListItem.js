function StudentListItem(props){

    return (
      <div>
        <p>{props.input.name} {props.input.class}</p>
      </div>
    );
}

export default StudentListItem;