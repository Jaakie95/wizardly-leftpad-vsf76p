import React, { useState } from "react";

function App() {
  // State to hold user input values
  const [baselineGlucose, setBaselineGlucose] = useState(0);
  const [peakGlucose, setPeakGlucose] = useState(0);
  const [recoveryTime, setRecoveryTime] = useState(0);
  const [variability, setVariability] = useState(0);
  const [includesFiberProtein, setIncludesFiberProtein] = useState(false);
  const [totalScore, setTotalScore] = useState(null);

  // Function to calculate meal score
  const calculateMealScore = () => {
    // Spike Score Calculation
    const delta = peakGlucose - baselineGlucose;
    let spikeScore = delta > 60 ? 1 : delta > 40 ? 2 : delta > 20 ? 3 : 4;

    // Recovery Score Calculation
    let recoveryScore =
      recoveryTime > 4 ? 1 : recoveryTime > 3 ? 2 : recoveryTime > 2 ? 3 : 4;

    // Bonus Points Calculation
    let bonusPoints = 0;
    if (variability < 10) bonusPoints++;
    if (includesFiberProtein) bonusPoints++;

    // Total Score Calculation
    const total = spikeScore + recoveryScore + bonusPoints;
    setTotalScore(total);
  };

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        margin: "20px",
      }}
    >
      <h1>Meal Score Calculator</h1>

      {/* Input fields for user data */}
      <div>
        <label>Baseline Glucose: </label>
        <input
          type="number"
          value={baselineGlucose}
          onChange={(e) => setBaselineGlucose(Number(e.target.value))}
          style={{
            margin: "5px",
            padding: "8px",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div>
        <label>Peak Glucose: </label>
        <input
          type="number"
          value={peakGlucose}
          onChange={(e) => setPeakGlucose(Number(e.target.value))}
          style={{
            margin: "5px",
            padding: "8px",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div>
        <label>Recovery Time (hrs): </label>
        <input
          type="number"
          value={recoveryTime}
          onChange={(e) => setRecoveryTime(Number(e.target.value))}
          style={{
            margin: "5px",
            padding: "8px",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div>
        <label>Variability: </label>
        <input
          type="number"
          value={variability}
          onChange={(e) => setVariability(Number(e.target.value))}
          style={{
            margin: "5px",
            padding: "8px",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div>
        <label>Meal includes fiber/protein: </label>
        <input
          type="checkbox"
          checked={includesFiberProtein}
          onChange={() => setIncludesFiberProtein(!includesFiberProtein)}
          style={{ margin: "5px" }}
        />
      </div>

      {/* Button to trigger calculation */}
      <button
        onClick={calculateMealScore}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Calculate Score
      </button>

      {/* Display the calculated score */}
      {totalScore !== null && <h2>Total Score: {totalScore}</h2>}
    </div>
  );
}

export default App;
