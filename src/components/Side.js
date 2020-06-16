import React from "react";
import FilterMenu from "./FilterMenu";
import StudentList from "./StudentList";
import { Typography, Divider } from "@material-ui/core";

const Side = (props) => {
  return (
    <div className="side">
      <Typography component="h2" variant="h5">
        Students
      </Typography>
      <StudentList students={props.students} />
      <Divider />
      <Typography component="h2" variant="h5">
        Filters
      </Typography>
      <FilterMenu
        handleFilterChange={props.handleFilterChange}
        filters={props.filters}
      />
    </div>
  );
};

export default Side;
