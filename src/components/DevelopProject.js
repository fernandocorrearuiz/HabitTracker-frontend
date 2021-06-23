import React from "react";

const DevelopProject = (props) => {
  const objectiveChangeHandler = (event) => {
    props.setObjective(event.target.value);
  };

  const currentLevelChangeHandler = (event) => {
    props.setCurrentLevel(event.target.value);
  };

  return (
    <div>
      <select value={props.currentLevel} onChange={currentLevelChangeHandler}>
        <option defaultValue>Select your current level</option>
        <option value="Definition">Definition</option>
        <option value="Initiation">Initiation</option>
        <option value="Execution">Execution</option>
        <option value="Monitoring and Control">Monitoring and Control</option>
        <option value="Closure">Closure</option>
      </select>

      <select value={props.objective} onChange={objectiveChangeHandler}>
        <option defaultValue>Select your objective</option>
        <option value="Definition">Definition</option>
        <option value="Initiation">Initiation</option>
        <option value="Execution">Execution</option>
        <option value="Monitoring and Control">Monitoring and Control</option>
        <option value="Closure">Closure</option>
      </select>
    </div>
  );
};

export default DevelopProject;
