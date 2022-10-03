import React, { useEffect, useRef, useState } from 'react'
import './SnakeXenzia.css'

import Header from '../Header'
import ProjectArea from '../ProjectArea'
import Back from '../Back'
import Snake from './components/Snake'
import Food from './components/Food'

const getRandomCoordinates = () => {
  let min = 1
  let max = 98
  let x = Math.floor((Math.random()*(max - min + 1) + min)/2)*2
  let y = Math.floor((Math.random()*(max - min + 1) + min)/2)*2
  return [x, y]
}

const initialState = {
  food: getRandomCoordinates(),
  direction: 'RIGHT',
  gameMode: 'PAUSE',
  speed: 90,
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0]
  ]
}

const Snakexenzia = () => {
  const [state, setState] = useState(initialState)

  const ref = useRef(state)
  const keydownable = useRef(true)

  useEffect(() => {
    const lmao = setInterval(() => {
      keydownable.current = true
      moveSnake()
    }, state.speed)
    document.onkeydown = onKeyDown
    return () => {
      clearInterval(lmao)
    }
  }, [state.speed])

  useEffect(() => {
    checkIfOutBorders()
    checkIfCollapsed()
    checkIfEat()
  })

  const onKeyDown = (e) => {
    e = e || window.event
    if (keydownable.current === true) {
      keydownable.current = false
      switch (e.keyCode) {
        case 38:
          if (ref.current.direction !== 'DOWN') ref.current = {...ref.current, direction: 'UP'}
          else keydownable.current = true
          break
        case 40:
          if (ref.current.direction !== 'UP') ref.current = {...ref.current, direction: 'DOWN'}
          else keydownable.current = true
          break
        case 37:
          if (ref.current.direction !== 'RIGHT') ref.current = {...ref.current, direction: 'LEFT'}
          else keydownable.current = true
          break
        case 39:
          if (ref.current.direction !== 'LEFT') ref.current = {...ref.current, direction: 'RIGHT'}
          else keydownable.current = true
          break
        default:
          break
      }
      setState(ref.current)
    }
  }

  const moveSnake = () => {
    if (ref.current.gameMode === 'PLAY') {
      let dots = [...ref.current.snakeDots]
      let head = dots[dots.length - 1]

      switch (ref.current.direction) {
        case 'RIGHT':
          head = [head[0] + 2, head[1]]
          break
        case 'LEFT':
          head = [head[0] - 2, head[1]]
          break
        case 'DOWN':
          head = [head[0], head[1] + 2]
          break
        case 'UP':
          head = [head[0], head[1] - 2]
          break
        default:
          break
      }
      dots.push(head)
      dots.shift()
      ref.current = {...ref.current, snakeDots: dots}
      setState(ref.current)
    }
  }

  const checkIfOutBorders = () => {
    const head = state.snakeDots[state.snakeDots.length - 1]
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver()
    }
  }

  const checkIfCollapsed = () => {
    let snake = [...state.snakeDots]
    let head = snake[snake.length - 1]
    snake.pop()
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver()
      }
    })
  }

  const isFoodValid = () => {
    let apple
    while (true) {
      let flag = true
      apple = getRandomCoordinates()
      // eslint-disable-next-line no-loop-func
      state.snakeDots.forEach(dot => {
        if (dot[0] === apple[0] && dot[1] === apple[1]) {
          flag = false
        }
      })
      if (flag === true) break
    }
    return apple
  }

  const checkIfEat = () => {
    let head = state.snakeDots[state.snakeDots.length - 1]
    let food = state.food
    if (head[0] === food[0] && head[1] === food[1]) {
      ref.current = {...ref.current, food: isFoodValid()}
      setState(ref.current)
      enlargeSnake()
      increaseSpeed()
    }
  }

  const enlargeSnake = () => {
    let newSnake = [...state.snakeDots]
    newSnake.unshift([])
    ref.current = {...ref.current, snakeDots: newSnake}
    setState(ref.current)
  }

  const increaseSpeed = () => {
    if (state.speed > 50) {
      ref.current = {...ref.current, speed: ref.current.speed - 2}
      setState(ref.current)
    }
  }

  const onGameOver = () => {
    alert(`Your score is: ${state.snakeDots.length}`)
    ref.current = initialState
    setState(initialState)
  }

  const onPlayGame = () => {
    switch (state.gameMode) {
      case 'PAUSE':
        ref.current = {...ref.current, gameMode: 'PLAY'}
        setState(ref.current)
        break
      default:
        break
    }
  }

  return (
    <div className='mb-4'>
      <Back />
      <Header>
        <button className='btn btn-success mb-2' onClick={() => onPlayGame()}>PLAY!</button>
        <p>Your score is: <span className='point text-danger'><b>{state.snakeDots.length}</b></span></p>
      </Header>
      <br />
      <ProjectArea width={'500px'} height={'500px'}>
        <div style={{'width': '96%', 'height': '96%', 'border': '1px solid rgb(0, 174, 255)', 'position': 'absolute'}}>
          <Snake snakeDots={state.snakeDots} />
          <Food food={state.food} />
        </div>
      </ProjectArea>
    </div>
  )
}

export default Snakexenzia