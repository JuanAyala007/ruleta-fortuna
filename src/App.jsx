import { useState } from "react"
import './App.css'
import phrase from "./utils/phrase.json"
import indexRandom from "./utils/randomPhrase"
import Card from "./components/Card"
import Btn from "./components/Btn"
import imagesPos from "./utils/imagesPos.json"
import randomPhrase from "./utils/randomPhrase"



function App() {
  const initial = indexRandom(phrase)
  const [phraseRandoms, setphraseRandoms] = useState(initial)
  const imges = randomPhrase(imagesPos)
  const [images, setimages] = useState(imges)

  const styles = {
    backgroundImage: `url("/fondo${images}.jpg")`
  }
  

  return (
    <div className="app" style={styles}><h1 className="tittle">Galleta de la fortuna</h1>
    
    <div className="card-btn"><Card phrases= {phraseRandoms}/>
    <Btn setphraseRandoms= {setphraseRandoms}
     setimages={setimages}/></div>

    </div>
  )
}

export default App
