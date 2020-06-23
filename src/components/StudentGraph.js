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

const StudentGraph = (props) => {
  const { difficultyEvaluations, funEvaluations } = props;
  const noFilters = Object.entries(props.filters).every((filter) => !filter[1]);
  const { fun, difficulty } = props.filters;
  return (
    <div className="graph-container">
      <XYPlot
        className="evaluations-graph"
        xType="ordinal"
        width={3500}
        height={400}
        animation={true}
        margin={{ left: 40, right: 10, top: 10, bottom: 60 }}
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
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries
          opacity={noFilters || difficulty ? 1 : 0}
          data={difficultyEvaluations}
          color="#12939A"
        />
        <VerticalBarSeries
          opacity={noFilters || fun ? 1 : 0}
          data={funEvaluations}
          color="#79C7E3"
        />
      </XYPlot>
    </div>
  );
};

export default StudentGraph;
