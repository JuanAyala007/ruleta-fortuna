import "../components/styles/card.css"

const Card = ({phrases}) => {
    const {phrase, author} = phrases
    
    
    return (
      <p className="card-phrase">{phrase}". <strong>{author}</strong></p>
      )
    }
    



export default Card