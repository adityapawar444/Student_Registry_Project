function StudentListItem(props){

    return (
      <div>
        <p>{props.input.name}</p>
        <p>{props.input.class}</p>
      </div>
    );
}

export default StudentListItem;