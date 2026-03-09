
import { useState, memo } from "react";

export default function MemoizationExample() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <>
            <form style={{width:"500px",height:"auto",margin:"100px auto"}} action="" autoComplete="off">
                <fieldset>
                    <input type="text" id="firstname" name="firstName" value={firstName} autoComplete="off" onChange={e => { setFirstName(e.target.value) }}>
                    </input>
                    <input type="text" id="lastName" name="lastName" value={lastName} autoComplete="off" onChange={e => { setLastName(e.target.value) }}>
                    </input>
                </fieldset>

            </form>
            <Greeting  name={firstName} />

        </>

    )
}

const Greeting= memo(({name}) =>{
    console.log(`Greeting rendered at ${(new Date(Date.now())).toString()}`);
    return <h1 style={{width:"500px",height:"auto",margin:"100px auto",textTransform:"capitalize"}}>Hi!!! {name}</h1>
});