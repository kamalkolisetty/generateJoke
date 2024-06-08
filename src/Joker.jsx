import { useState,useEffect } from "react";

export default function Joker (){
  const url="https://official-joke-api.appspot.com/random_joke"
    let [joke,setJoke]=useState({})
  const getJoke= async ()=>{
   let response = await fetch(url);
   let jsonResponse= await response.json()
   console.log(jsonResponse)
   setJoke({setup:jsonResponse.setup,
    punchline:jsonResponse.punchline
   })
  }
  useEffect( ()=>{   async function getFirstJoke(){
    let response = await fetch(url);
    let jsonResponse= await response.json()
    console.log(jsonResponse)
    setJoke({setup:jsonResponse.setup,
     punchline:jsonResponse.punchline });
  }getFirstJoke()},[]);
  return (
        <div>
            <h1>Tickle Your Funny Bone: Get a Random Joke!</h1>

            <h2>{joke.setup} </h2>
            <h2>{joke.punchline} </h2>
            <h5> 😂 😂 Want more??? CLICK the buttttttton below </h5>

            <button style={{
                border:"2px solid #FF75D8",
                backgroundColor:"#B4F8C8",
                
            }}

            

            
            onClick={getJoke} >Get Another!! 😂 </button>
        </div>
    )
}