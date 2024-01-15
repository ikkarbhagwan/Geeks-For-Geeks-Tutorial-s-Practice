import { useState, useEffect } from "react";

const App = () => {
  const getCurrentTimings = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    return { currentDate, currentTime };
  };

  const [nowDate, setNowDate] = useState(getCurrentTimings()); // Call the function here

  const updateThatDates = () => {
    setNowDate(getCurrentTimings());
  };

   setInterval(updateThatDates, 1000);


  return (
    <div>
      <h1>Date and Timings :: </h1> <hr />
      <h2>Today's date {nowDate.currentDate}</h2>
      <h2>Today's time {nowDate.currentTime}</h2>
    </div>
  );
};

export default App;
