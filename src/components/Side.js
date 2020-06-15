import React from "react";
import FilterMenu from "./FilterMenu";
import StudentList from "./StudentList";

const Side = (props) => {
  return (
    <div className="side">
      <h2>Students</h2>
      <StudentList evaluations={props.evaluations} />
      <h2>Filters</h2>
      <FilterMenu
        handleFilterChange={props.handleFilterChange}
        filters={props.filters}
      />
    </div>
  );
};

export default Side;
