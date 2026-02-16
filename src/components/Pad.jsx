import { useState } from "react"

export function Pad(props){


    return <button
        className={`w-20 h-20 border-2 border-white ${props.on? "opacity-100":"opacity-20"}`} 
        style={{backgroundColor:props.color}}
        onClick={()=>props.togglePad(props.id)}
     ></button>
}