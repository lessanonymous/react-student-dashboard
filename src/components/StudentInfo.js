import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Phone, Email } from "@material-ui/icons";

const StudentInfo = (props) => {
  const { student } = props;
  return (
    <Card className="student-profile" variant="outlined">
      <CardHeader
        avatar={
          <Avatar
            className="student-avatar"
            alt={`${student.firstName} ${student.lastName}`}
            src={student.avatar}
          />
        }
        title={
          <Typography variant="h6" component="h3">
            {`${student.firstName} ${student.lastName}`}
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Typography
          className="student-info-text"
          variant="subtitle1"
          component="h3"
        >
          <Phone /> {` ${student.phone}`}
        </Typography>
        <Typography
          className="student-info-text"
          variant="subtitle1"
          component="h3"
        >
          <Email /> {` ${student.email}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StudentInfo;
