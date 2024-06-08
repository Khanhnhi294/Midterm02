import React from "react";
import { useState } from "react";
function App() {
  // const [isPress, setPress] = useState(false);
  const [text, setText] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value.toUpperCase());
  };
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input 
       type="text"
       name="text"
       id="text"
       value={text}
       onChange={handleInput}

      />
      <p>
        <label>Here is the text in upper case</label>

       <input
        onChange={handleInput}
        onMouseEnter={handleText}
       disabled />
      </p>
    </main>
  );
}

export default App;
