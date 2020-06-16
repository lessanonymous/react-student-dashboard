import React from "react";
import Student from "./Student";
import { List } from "@material-ui/core";

const StudentList = (props) => {
  const studentComponents = props.students.map((student) => (
    <Student key={student.id} student={student} />
  ));
  return (
    <List component="nav" className="student-list">
      {studentComponents}
    </List>
  );
};

export default StudentList;
