import React from "react";
import { Link, Navigate } from "react-router-dom";

//Link es un <a> y no va con isActive
function App() {

  return (
    <div>
      <h2>Home (private)</h2>
      <h3>welcome</h3>
      <p>Lorem ipsum dolor sit.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <Link to={`/about/`}>About</Link>
    </div>
  );
}

export default App;
