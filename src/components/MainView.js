import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  DiscreteColorLegend,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

const MainView = (props) => {
  const funEvaluations = props.evaluations.map((evaluation) => {
    if (evaluation.assignment.includes(" "))
      evaluation.assignment = evaluation.assignment.split(" ")[0];
    return {
      x: evaluation.assignment,
      y: evaluation.fun,
    };
  });
  const DifficultyEvaluations = props.evaluations.map((evaluation) => {
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

export default MainView;
