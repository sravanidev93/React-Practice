
import ReactDom from "react-dom/client"

import React from "react";

import { useState } from "react";


const styleButton = {
    margin: "100px 50% ",
    backgroundColor: "blue",
    color: "white",
    height: "40px",
    width: "100px",
    border: "0px",
    borderRadius: "20px",
    fontWeight: "bold"
}

const styleContainer = {
    margin: "100px 45%",
    backgroundColor: "lightgreen",
    height: "150px",
    width: "300px",
    border: "0px",
    padding: "12px",
    boxSizing: "border-box",
        border:"0px",
    borderRadius: "12px",



}

const counterStyles = {
    margin: "35px",
    fontWeight: "bold",
    fontSize: "25px",
    color:"white"

}

const incrdecrStyles = {
    width: "25px",
    height: "25px",
    backgroundColor: "skyblue",
    color: "white",
    fontWeight: "bold",
    margin: "10px",
    border: "0px",
    fontWeight: "bold",
    fontSize: "25px",
}

function Main() {
    const [isLogin, SetIsLogin] = useState(false);


    function ToggleLogin() {
        SetIsLogin(!isLogin)


    }

    return (
        <button style={styleButton} onClick={ToggleLogin}>
            {isLogin ? "LogOut" : "Login"}
        </button>

    )


}


function Counter() {
    const [count, setCount] = useState(0);

    function IncrementCount() {

        setCount((prev) => prev + 1)

    }

    function DecrementCount(count) {
        if (count >= 0) {
            setCount(prev => prev - 1)


        } else {
            alert("Count is less than 1")
        }
    }

    return (
        <div style={styleContainer}>
            <section style={counterStyles}>
                <button style={incrdecrStyles} onClick={DecrementCount}>-
                </button>Count:{count}
                <button style={incrdecrStyles} onClick={IncrementCount}>+
                </button>
                <button style={{
                    margin: "15px 30%",
                    backgroundColor: "red",
                    border: "0px",
                    borderRadius: "12px",
                    width: "80px",
                    height: "30px"
                }} onClick={() => setCount(0)}>Reset</button>
            </section>

        </div>

    )
}


ReactDom.createRoot(document.getElementById("main")).render(
    // <SayHello></SayHello> 
    <React.Fragment>
        <Main />
        <Counter />
    </React.Fragment>


)

