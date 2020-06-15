import React from "react";
import { Link } from "react-router-dom";

const Student = (props) => {
  return (
    <li>
      <Link to={`/students/${props.name}`}>{props.name}</Link>
    </li>
  );
};

export default Student;
