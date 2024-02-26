import React from 'react'

const randomPhrase = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
 
}

export default randomPhrase