import React from "react";
import { Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <div className="header">
      <Typography component="h1" variant="h3">
        Student Dashboard
      </Typography>
    </div>
  );
};

export default Header;
