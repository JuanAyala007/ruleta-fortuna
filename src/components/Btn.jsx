import randomPhrase from "../utils/randomPhrase"
import phrase from "../utils/phrase.json"
import imagesPos from "../utils/imagesPos.json"
import "../components/styles/btn.css"


const btn = ({setphraseRandoms, setimages}) => {
    const handleClick = () => {
    const newPhrase =   randomPhrase(phrase)
    setphraseRandoms(newPhrase)

    const background = randomPhrase(imagesPos)
    setimages(background)

    }
  return (
    <button className="card-button" onClick={handleClick}>Probar mi suerte</button>
  )
}

export default btn