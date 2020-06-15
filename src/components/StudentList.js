import React from "react";
import Student from "./Student";

const StudentList = (props) => {
  const studentNames = [];
  props.evaluations.forEach((evaluation) => {
    if (!studentNames.includes(evaluation.name))
      studentNames.push(evaluation.name);
  });
  const students = studentNames.map((name) => (
    <Student key={name} name={name} />
  ));
  return <ul className="student-list">{students}</ul>;
};

export default StudentList;
