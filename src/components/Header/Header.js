import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { Logo } from "../Shared/Logo/Logo";

export const Header = () => {
  return (
    <Link to="/">
      <div className="header">
        <Logo />
      </div>
    </Link>
  );
};
