import React from "react";

const LoseBodyFat = (props) => {
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
        <option value="3-10%">3-10%</option>
        <option value="10-20%">10-20%</option>
        <option value="20-30%">20-30%</option>
        <option value="30-40%">30-40%</option>
        <option value="More than 40%">More than 40%</option>
      </select>

      <select value={props.objective} onChange={objectiveChangeHandler}>
        <option defaultValue>Select your objective</option>
        <option value="3-5%">3-5%</option>
        <option value="6-10%">6-10%</option>
        <option value="10-15%">10-15%</option>
        <option value="15-20%">15-20%</option>
        <option value="20-25%">20-25%</option>
      </select>
    </div>
  );
};

export default LoseBodyFat;
