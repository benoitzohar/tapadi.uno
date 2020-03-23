import React from "react";

import Avatar from "./Avatar";
import Meta from "./Meta";

import "App.css";

export default function App() {
  return (
    <main className="main">
      <div className="App">
        <Meta />
        <div className="avatar">
          <Avatar />
        </div>
        <h1>Hey I'm Ben 👋</h1>
        <h2>
          When I'm bored I create <b>silly</b>, <b>funny</b> or <b>useless</b>{" "}
          apps and websites.
        </h2>

        <h2>
          If you don't like funny projects 🙄 you can also{" "}
          <a href="https://benoitzohar.com">
            check my <b>very serious</b> website.
          </a>
        </h2>
      </div>
    </main>
  );
}
