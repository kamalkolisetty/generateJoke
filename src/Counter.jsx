import { useState ,useEffect } from "react"

export default function Counter(){
    let [count,setCount]=useState(0)
    let [countx,setCountx]=useState(0)
    let incCount=()=>{
        setCount((currCount)=> currCount+1)
    }
    let incCountx=()=>{
        setCountx((currCountx)=> currCountx+1)
    }
    // useEffect will hav 2 components { setup, dependecies ( on which
    // componets this hav to b done will place them in an [] ) }
    useEffect((function printSomething(){
        console.log("Side effect")
    } ),[countx] )

 
    return (
        <div>
            <h3>Count = {count} </h3>
            <button onClick={incCount}>+1</button> <br /><br />
            <h3>Count = {countx} </h3>
            <button onClick={incCountx}>+1</button>
        </div>
    )
}