import React from "react";

import Avatar from "./avatar-round.svg";

import "App.css";

export default function App() {
  return (
    <div className="App">
      <img className="avatar" src={Avatar} alt="Avatar" />
      Hey I'm Ben 👋
    </div>
  );
}
