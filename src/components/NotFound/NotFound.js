import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.scss";
import notFound from "../../assets/not-found.jpg";

export const NotFound = () => {
  return (
    <div className="not-found__page">
      <img className="not-found_img" src={notFound} />
      <p className="not-found__paragraph">
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
};
