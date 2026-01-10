
import { useState, useRef } from "react"




export default function StopWatch() {

  const intRef = useRef(null);
  const [count, setCount] = useState(0);
  const startTime = useRef(null);
  const currTime = useRef(null);

  function Start() {
    if (!startTime.current) {
      startTime.current = Date.now();
    }
    intRef.current = setInterval(() => {
      currTime.current = Date.now();
      const timesElapsed = (currTime.current - startTime.current) / 1000;
      setCount(timesElapsed);

    }, 10);

  }

  function Stop() {
    if (intRef.current) {
      clearInterval(intRef.current)
      startTime.current = null;
    }
  }

  return (
    <div style={{
      margin: "100px auto",
      width: "250px",
      height: "230px",
      padding: "5px",
      boxSizing: "border-box",
      border: "3px solid gold",
      borderRadius: "25px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"space-evenly",
      backgroundColor: "white"
    }}>

      <h1 style={{
        fontFamily: "Arial,sans-serif",
        textShadow: "2px 5px 10px yellow",
        color: "orange"
      }}>StopWatch</h1>
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <p style={{
          width: "50px",
          height: "30px",
          fontSize: "35px",
          marginLeft: "-46px"
        }}>{count}</p>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",

          width: "200px"
        }}>
          <button style={{
            width: "70px",
            height: "30px",
            padding: "2px",
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "lightgreen",
            border: "0px",
            borderRadius: "8px",
            color: "white"
          }} onClick={Start}>Start</button>
          <button style={{
            width: "70px",
            height: "30px",
            padding: "2px",
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "red",
            border: "0px",
            borderRadius: "8px",
            color: "white"
          }} onClick={Stop}>Stop</button>
        </div>
      </section>
    </div>

  )
}