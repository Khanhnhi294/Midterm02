import React from "react";

function App() {
  const [isFirstNo, setFirstNo] = useState('');
  const [isSecondNo, setSecondNo] = useState('');

  /* You will need some function to handle the key pressed and button events */

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled />
      <button>Compute</button>
    </main>
  );
}

export default App;
