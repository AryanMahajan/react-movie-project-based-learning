import { useState, useEffect } from "react"

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0)

  console.log("counter");

  //hooking into the lifecycle events
  useEffect(function () {
    setInterval(function () {
      setCount(function(count){
        return count+1
      });
    }, 1000)
    console.log("mounted");

  }, []);

  function increaseCount() {
    setCount(count + 1)
  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase</button>
  </div>
}

export default App
