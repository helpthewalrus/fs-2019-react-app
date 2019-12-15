import React from "react";
import uuid from "uuid";

import "./Toggler.scss";

export const Toggler = ({ leftLabel, rightLabel, title, onChangeCb }) => {
  const switchLeft = uuid.v4();
  const switchLRight = uuid.v4();
  return (
    <form className="switch-field">
      <div className="switch-title">{title}</div>
      <input
        type="radio"
        id={switchLeft}
        name="switchToggle"
        value={leftLabel}
        defaultChecked
        onChange={onChangeCb}
      />
      <label htmlFor={switchLeft}>{leftLabel}</label>

      <input
        type="radio"
        id={switchLRight}
        name="switchToggle"
        value={rightLabel}
        onChange={onChangeCb}
      />
      <label htmlFor={switchLRight}>{rightLabel}</label>
    </form>
  );
};
