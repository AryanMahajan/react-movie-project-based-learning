import { useState, useEffect } from "react"

function App() {

  let [counterVisible, setCounterVisible] = useState(true)

  useEffect(()=>{
    setInterval(()=>{
      setCounterVisible(c => !c)
    },5000)
  },[])

  return (
    <div>
      hi
      { counterVisible && <Counter />}
      hello
      {/* <Counter></Counter> */}
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0)

  // console.log("counter");

  //hooking into the lifecycle events
  useEffect(function () {
    console.log("on mount")
    let clock = setInterval(() => {
      // setCount(count => count+1)
      console.log("inside the setInterval");
      setCount((count) => {
        return count+1
      });
    }, 1000)

    return function() {
      console.log("unmount");
      
      clearInterval(clock)
    }

  }, []); //dependancy array

  function increaseCount() {
    setCount(count + 1)
  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase</button>
  </div>
}

export default App
