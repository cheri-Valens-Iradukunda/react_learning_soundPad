import { Pad } from "./components/Pad"
import padsData from "./assets/pads"
import { useEffect, useState } from "react"

function App() {

  const [pads,setPads] = useState(padsData)

  const togglePad = (id) => {
    setPads(currPads => {
      return currPads.map(elem => {
        return elem.id == id ? {...elem,on: !elem.on}: elem
      })
    })
  }

  return (
    <>
    
      <div className="grid grid-cols-2 grid-rows-3 gap-4 w-fit">
        {

          pads.map(elem=>(
            
            <Pad key={elem.id} id={elem.id} color={elem.color} on={elem.on} togglePad={togglePad} />

          ))
        }
      </div>
    </>
  )
}

export default App
