import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import './Hangman.css'

import Header from '../Header'
import ProjectArea from '../ProjectArea'
import Back from '../Back'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'

import { animals } from './components/words/Animals'
import { colors } from './components/words/Colors'
import { countries } from './components/words/Countries'
import { fruits } from './components/words/Fruits'
import { things } from './components/words/Things'

const topicsList = ['animals', 'fruits', 'things', 'colors', 'countries']
const wordsList = [animals, fruits, things, colors, countries]

let randomF = Math.floor(Math.random() * topicsList.length)

let topic = topicsList[randomF]
let words = wordsList[randomF]

let selectedWord = words[Math.floor(Math.random() * words.length)]
let previousWord = selectedWord

const Hangman = () => {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  const youChoked = () => {
    swal({
      text: 'You have already entered this letter!',
      buttons: false,
      timer: 600
    })
  }

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase()

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) setCorrectLetters(currentLetters => [...currentLetters, letter])
          else youChoked()
        }
        else {
          if (!wrongLetters.includes(letter)) setWrongLetters(currentLetters => [...currentLetters, letter])
          else youChoked()
        }
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [correctLetters, wrongLetters, playable])

  const youWin = () => {
    swal("The word is: " + previousWord, {
      title: 'Congratulations! You won!',
      icon: 'success'
    }).then(() => {
      previousWord = selectedWord
      setPlayable(true)
    })
  }

  const youLose = () => {
    swal("The word is: " + previousWord, {
      title: 'Unfortunately you lost...',
      icon: 'error'
    }).then(() => {
      previousWord = selectedWord
      setPlayable(true)
    })
  }

  function playAgain() {
    setPlayable(true)
    setCorrectLetters([])
    setWrongLetters([])

    randomF = Math.floor(Math.random() * topicsList.length)

    topic = topicsList[randomF]
    words = wordsList[randomF]
    selectedWord = words[Math.floor(Math.random() * words.length)]
  }

  const checkWinOrLose = (correct, wrong, word) => {
    let status = 'win'
    word.split('').forEach(letter => {if (!correct.includes(letter)) status = ''})
    if (wrong.length === 7) status = 'lose'
    return status
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const status = checkWinOrLose(correctLetters, wrongLetters, selectedWord)
    let play = true
    if (status === 'win' || status === 'lose') play = false
    
    if (play === false) {
      playAgain()
      setPlayable(false)
      if (status === 'win') youWin()
      else youLose()
    }
  })

  return (
    <div className='mb-4'>
      <Back />
      <Header>
        <h5>Topic is: <span className='text-danger'><b>{topic}</b></span></h5>
        <h5><span className='text-danger'><b>{7 - wrongLetters.length}</b></span> live{7 - wrongLetters.length > 1 ? 's' : ''} left</h5>
        <p><small><i>(Change your keyboard to English mode)</i></small></p>
      </Header>
      <br />
      <ProjectArea width={'500px'} height={'auto'}>
        <div className='hangman-area-divider'>
          <Figure wrongLetters={wrongLetters} />
          <WrongLetters wrongLetters={wrongLetters} />
        </div>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </ProjectArea>
    </div>
  )
}

export default Hangman