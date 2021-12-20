import React, { useState } from "react";

function App() {

  //let time = new Date().toLocaleTimeString();

  const [latestTime, setTime] = useState("time");

  function updateTime(){
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime,1000);

  return (
    <div className="container">
      <h1>{latestTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );


}

export default App;
