import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="hangman-word">
      {selectedWord.split('').map((letter, i) => {
          return <span className="hangman-letter" key={i}>{ correctLetters.includes(letter) ? letter : '' }</span>
      })}
    </div>
  )
}

export default Word