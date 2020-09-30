import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(42)
  const [firstNumber, setFirstNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)

  const [operator, setOperator] = useState(null)

  function clickClearButton(event) {
    setFirstNumber(null)
    setDisplay(0)
  }
  function clickOnNumber(digit) {
    if (operator === null) {
      setFirstNumber(digit)
      setDisplay(digit)
    } else {
      setSecondNumber(digit)
      setDisplay(digit)
    }
  }
  function clickedOperator(selectOperator) {
    selectOperator(selectOperator)
  }
  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clickClearButton}>
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('/')
            }}
          >
            &#247;
          </button>
          <button className="button" onClick={() => clickOnNumber(7)}>
            7
          </button>
          <button className="button" onClick={() => clickOnNumber(8)}>
            8
          </button>
          <button className="button" onClick={() => clickOnNumber(9)}>
            9
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('*')
            }}
          >
            &#215;
          </button>
          <button className="button" onClick={() => clickOnNumber(4)}>
            4
          </button>
          <button className="button" onClick={() => clickOnNumber(5)}>
            5
          </button>
          <button className="button" onClick={() => clickOnNumber(6)}>
            6
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('-')
            }}
          >
            &#8722;
          </button>
          <button className="button" onClick={() => clickOnNumber(1)}>
            1
          </button>
          <button className="button" onClick={() => clickOnNumber(2)}>
            2
          </button>
          <button className="button" onClick={() => clickOnNumber(3)}>
            3
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('+')
            }}
          >
            &#43;
          </button>
          <button className="button x2" onClick={() => clickOnNumber(0)}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op">&#61;</button>
        </div>
      </div>
    </main>
  )
}
