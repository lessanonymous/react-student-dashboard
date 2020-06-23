import React from "react";
import MainGraph from "./MainGraph";

const MainView = (props) => {
  const funEvaluations = props.evaluations.map((evaluation) => {
    if (evaluation.assignment.includes(" "))
      evaluation.assignment = evaluation.assignment.split(" ")[0];
    return {
      x: evaluation.assignment,
      y: evaluation.fun,
    };
  });
  const difficultyEvaluations = props.evaluations.map((evaluation) => {
    if (evaluation.assignment.includes(" "))
      evaluation.assignment = evaluation.assignment.split(" ")[0];
    return {
      x: evaluation.assignment,
      y: evaluation.difficulty,
    };
  });
  return (
    <div className="main">
      <MainGraph
        funEvaluations={funEvaluations}
        difficultyEvaluations={difficultyEvaluations}
        filters={props.filters}
      />
    </div>
  );
};

export default MainView;
