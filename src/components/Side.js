import React from "react";
import FilterMenu from "./FilterMenu";
import StudentList from "./StudentList";
import { Typography, Divider, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const Side = (props) => {
  return (
    <div className="side">
      <Button variant="outlined" component={RouterLink} to="/">
        Student Overview
      </Button>
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
