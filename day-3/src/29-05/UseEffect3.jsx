import { useEffect, useState } from "react";

function UseEffect3() {
  const [counter, setCounter] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // true
  function SwitchFlag() {
    setIsUserLoggedIn((prevState) => !prevState); // false => !false => true   // true => !true => false
  }

  function Increment() {
    setCounter(counter + 1);
  }
    useEffect(() => {
        if(counter>=10 && counter<=20){
      alert("Counter is in between 10-20");
    }else{
        alert("Counter is out of range");  
    }
    }, [counter]);

//   useEffect(() => {
//     alert("Calling from useeffect.");
//   }, [counter, isUserLoggedIn]);
  return (
    <div>

      {isUserLoggedIn ? (
        <button onClick={SwitchFlag}>Welcome! Logout?</button>
      ) : (
        <button onClick={SwitchFlag}>Please login!</button>
      )}
      <h1>Counter : {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default UseEffect3;