import React from "react";

//styles
import "./App.scss";

//components
import Button from "./components/Button/Button";

const handleClick = () => {
  console.log("Save click");
};

const App = () => {
  return (
    <div className="App">
      <Button title="click me" onClick={handleClick} size="sm" />
      <Button title="click me" onClick={handleClick} size="md" />
      <Button title="click me" onClick={handleClick} size="lg" />
    </div>
  );
};

export default App;
