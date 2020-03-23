import React from "react";

import Avatar from "./Avatar";
import Meta from "./Meta";

import "App.css";

export default function App() {
  return (
    <div className="App">
      <Meta />
      <div className="avatar">
        <Avatar />
      </div>
      <h1>Hey I'm Ben 👋</h1>
      <h2>
        When I'm bored I create silly, funny or useless apps and websites.
      </h2>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
