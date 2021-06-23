import React from "react";

const ObtainEducation = (props) => {
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
        <option value="Amateur">Amateur</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Professional">Professional</option>
      </select>

      <select value={props.objective} onChange={objectiveChangeHandler}>
        <option defaultValue>Select your objective</option>
        <option value="Amateur">Amateur</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Professional">Professional</option>
      </select>
    </div>
  );
};

export default ObtainEducation;
