import React, { useState } from "react"; 

export const MyComponent = () => {

    const [value, setValue] = useState(11);
    return <>
        <div>This is a react component! {`${Math.random()}`}</div>
        <div>state value: {value}</div>
        <div><button onClick = {() => setValue(Math.random())}>update state</button></div>
    </>
}