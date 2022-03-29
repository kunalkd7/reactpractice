import React, { useState , useEffect } from 'react'

function Comp(props){

    let [inc, setinc] = useState(1)
    let [dec, setdec] = useState(1)

    function Inc(){
        setinc(inc + 1);
    }
    function Dec(){
        setdec(dec - 1);
    }
     // componentdidmount componentdidupdate in one method  
    useEffect(() => {console.log("useeffect")},[inc]) // [value] = componentDidupdate

    return <>
        <h1>{inc}</h1>
        <button onClick={Inc} >click me</button>
        <h1>{dec}</h1>
        <button onClick={Dec} >click me</button>
        
    </>
}

export default Comp