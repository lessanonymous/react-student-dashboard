import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend,
} from "react-vis";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Phone, Email } from "@material-ui/icons";

const StudentView = (props) => {
  const { name } = useParams();
  const funEvaluations = props.evaluations
    .filter((evaluation) => evaluation.name === name)
    .map((evaluation) => {
      if (evaluation.assignment.includes(" "))
        evaluation.assignment = evaluation.assignment.split(" ")[0];
      return {
        x: evaluation.assignment,
        y: evaluation.fun,
      };
    });
  const DifficultyEvaluations = props.evaluations
    .filter((evaluation) => evaluation.name === name)
    .map((evaluation) => {
      if (evaluation.assignment.includes(" "))
        evaluation.assignment = evaluation.assignment.split(" ")[0];
      return {
        x: evaluation.assignment,
        y: evaluation.difficulty,
      };
    });
  const noFilters = Object.entries(props.filters).every((filter) => !filter[1]);
  const { fun, difficulty } = props.filters;
  const student = props.students.find((student) => student.firstName === name);
  return (
    <div className="student-main">
      <div className="graph-container">
        <XYPlot
          className="evaluations-graph"
          xType="ordinal"
          width={3500}
          height={400}
          animation={true}
        >
          <DiscreteColorLegend
            orientation="horizontal"
            items={[
              { title: "Difficulty", color: "#12939A" },
              { title: "Fun", color: "#79C7E3" },
            ]}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            opacity={noFilters || difficulty ? 1 : 0}
            data={DifficultyEvaluations}
            color="#12939A"
          />
          <VerticalBarSeries
            opacity={noFilters || fun ? 1 : 0}
            data={funEvaluations}
            color="#79C7E3"
          />
        </XYPlot>
      </div>
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
          <Typography variant="subtitle1" component="h3">
            <Phone /> {` ${student.phone}`}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            <Email /> {` ${student.email}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentView;
