
const container = document.querySelector('.container');

const throttle =(callback , delay) => {
    isWaiting = false;
    return () => {
        callback();
    }
}


const handleScorlle = () =>{
    console.log("scrolled");
};


container.addEventListener("scroll", handleScorlle);