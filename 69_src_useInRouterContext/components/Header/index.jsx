// import { func } from "prop-types";
import React from "react";
import { useNavigate, useInRouterContext } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  console.log('**', useInRouterContext());

  function back() {
    navigate(-1);
  }
  function forward() {
    navigate(1);
  }

  return (
    <div className="col-offset-2 col-8">
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={back}>←後退</button>
        <button onClick={forward}>前進→</button>
      </div>
    </div>
  );
}
