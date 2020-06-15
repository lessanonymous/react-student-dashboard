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
  return (
    <div className="main">
      <div className="graph-container">
        <XYPlot
          className="evaluations-graph"
          xType="ordinal"
          width={3500}
          height={400}
        >
          <DiscreteColorLegend
            style={{ position: "absolute", left: "50px", top: "10px" }}
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
    </div>
  );
};

export default StudentView;
