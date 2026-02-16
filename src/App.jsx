import { Pad } from "./components/Pad"
import padsData from "./assets/pads.json"
import { useState } from "react"

function App() {

  const [pads,setPads] = useState(padsData)


  const togglePad = (id) => {
    setPads(currPads => {
      return currPads.map(elem => {
        return elem.id == id ? {...elem,on: !elem.on}: elem
      })
    })
  }

  const handleTurn = () => {
    setPads(currPads => {
      return currPads.map(elem => {
        return {...elem,on: false}
      })
    })
  }

  return (
    <>
    
      <div className="grid grid-cols-2 grid-rows-3 gap-2 w-fit">
        {

          pads.map(elem=>(
            
            <Pad key={elem.id} id={elem.id} color={elem.color} on={elem.on} togglePad={togglePad} />

          ))
        }
        <button onClick={handleTurn} className="bg-green-900 px-5 py-2 col-span-2 text-white font-semibold" >Turn all off</button>
      </div>
    </>
  )
}

export default App
