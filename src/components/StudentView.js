import React from "react";
import { useParams } from "react-router-dom";
import StudentGraph from "./StudentGraph";
import StudentInfo from "./StudentInfo";

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
  const difficultyEvaluations = props.evaluations
    .filter((evaluation) => evaluation.name === name)
    .map((evaluation) => {
      if (evaluation.assignment.includes(" "))
        evaluation.assignment = evaluation.assignment.split(" ")[0];
      return {
        x: evaluation.assignment,
        y: evaluation.difficulty,
      };
    });
  const student = props.students.find((student) => student.firstName === name);
  return (
    <div className="student-main">
      <StudentGraph
        funEvaluations={funEvaluations}
        difficultyEvaluations={difficultyEvaluations}
        filters={props.filters}
      />
      <StudentInfo student={student} />
    </div>
  );
};

export default StudentView;
