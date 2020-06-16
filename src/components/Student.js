import React from "react";
import ListItemLink from "./ListItemLink";

const Student = (props) => {
  const { firstName, lastName, avatar } = props.student;
  return (
    <ListItemLink
      avatar={avatar}
      primary={`${firstName} ${lastName}`}
      to={`/students/${firstName}`}
    />
  );
};

export default Student;
