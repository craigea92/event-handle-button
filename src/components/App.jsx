import React, { useState }from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?" 
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
