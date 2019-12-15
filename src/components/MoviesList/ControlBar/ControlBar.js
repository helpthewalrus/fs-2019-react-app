import React from "react";

import { Toggler } from "../../Shared/Toggler/Toggler";
import "./ControlBar.scss";

export const ControlBar = ({ changeSortType, moviesCount }) => {
  return (
    <div className="sort-wrapper">
      <p className="additional-info">
        {`${moviesCount} movie${moviesCount === 1 ? "" : "s"} found`}
      </p>
      <Toggler
        leftLabel="year"
        rightLabel="title"
        title="sort by"
        onChangeCb={changeSortType}
      />
    </div>
  );
};
