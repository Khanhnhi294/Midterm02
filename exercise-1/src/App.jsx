import React, { useState } from "react";
function App() {
  const [isRaining, setRaining] = useState(false);
  function onSunClick() {
    setRaining = (!isRaining);
  }

  function onRainClick() {
    setRaining = (true);
  }

  function getTitle() {
   if (isRaining != false & isSunning == true){
    return "It's rainning"
   }else{
    return "It'sunning"
   }
  }

  function getBackgroundColor(color) {
    if (isRaining != false & isSunning == true){
       
     }else{

     }
  }

  return (
    <main className="sunny" onClick={getBackgroundColor}>
      <h1> Your click {getTitle}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
