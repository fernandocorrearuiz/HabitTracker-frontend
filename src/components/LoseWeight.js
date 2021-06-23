import React from "react";

import { Card } from "react-bootstrap";

const LoseWeight = (props) => {
  const objectiveChangeHandler = (event) => {
    props.setObjective(event.target.value);
  };

  const currentLevelChangeHandler = (event) => {
    props.setCurrentLevel(event.target.value);
  };

  return (
    <div>
      <label>Select your current level</label>
      <input
        type="number"
        step={0.1}
        min={45.1}
        max={300}
        value={props.currentLevel}
        onChange={currentLevelChangeHandler}
      />
      <label>Select your objective</label>
      <input
        type="number"
        step={0.1}
        min={45.1}
        max={300}
        value={props.objective}
        onChange={objectiveChangeHandler}
      />
    </div>
  );
};

export default LoseWeight;
