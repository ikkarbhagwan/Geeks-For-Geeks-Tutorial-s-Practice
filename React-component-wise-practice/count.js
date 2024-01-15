import { useState } from "react";

const App = () =>{

    const getTimings = () =>{

        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();


        return {currentDate, currentTime}

    };

        const [currdate, setUpdateCurrDate] = useState(getTimings);

        const updateOurTimings = () => {
            setUpdateCurrDate(getTimings());

        }

        setInterval(updateOurTimings() ,1000);
        


    return (
        <div>


        <h1>This are the timing : </h1>
        <h2>Date : {currdate.currentDate}</h2>
        <h2>Time : {currdate.currentTime}</h2>

        </div>
    )
}

export default App