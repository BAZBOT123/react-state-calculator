import "./App.css"
import { useState } from 'react'
import './styles.css';

function App() {
  let [number, setNumber] = useState('0')
  let [digit, setSecNumber] = useState('0')
  let [operator, setOperator] = useState('+')


  function firstPanel(event) {
    console.log(event.target.innerText)
    setNumber((currentNumber) => {
      if (currentNumber[0] === '0') {
        currentNumber = ''
      }
      return currentNumber + event.target.innerText
    })
  }

  function secondPanel(event) {
    console.log(event.target.innerText)
    setSecNumber((currentNumber) => {
      if (currentNumber[0] === '0') {
        currentNumber = ''
      }
      return currentNumber + event.target.innerText
    })
    //  return setSecNumber(digit + event.target.innerText)
  }

  function Calculate(event) {
    return setOperator(event.target.innerText)
  }

  let operations = {
    '+': function (a, b) {
      return a + b
    },
    '-': function (a, b) {
      return a - b
    },
    '*': function (a, b) {
      return a * b
    },
    '÷': function (a, b) {
      return a / b
    }
  }

  let answer = operations[operator](Number(number), Number(digit))

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="calculator-panels">
        <div className="panel">
          <p>{number}</p>
          <div className="numbers">
            <button onClick={firstPanel}>1</button>
            <button onClick={firstPanel}>2</button>
            <button onClick={firstPanel}>3</button>
            <button onClick={firstPanel}>4</button>
            <button onClick={firstPanel}>5</button>
            <button onClick={firstPanel}>6</button>
            <button onClick={firstPanel}>7</button>
            <button onClick={firstPanel}>8</button>
            <button onClick={firstPanel}>9</button>
            <button onClick={firstPanel}>0</button>
            <button onClick={() => setNumber(number = 0)}>Clear</button>
            <button onClick={firstPanel}>.</button>
          </div>
        </div>

        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick={Calculate}>+</button>
            <button onClick={Calculate}>-</button>
            <button onClick={Calculate}>*</button>
            <button onClick={Calculate}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{digit}</p>
          <div className="numbers">
            <button onClick={secondPanel}>1</button>
            <button onClick={secondPanel}>2</button>
            <button onClick={secondPanel}>3</button>
            <button onClick={secondPanel}>4</button>
            <button onClick={secondPanel}>5</button>
            <button onClick={secondPanel}>6</button>
            <button onClick={secondPanel}>7</button>
            <button onClick={secondPanel}>8</button>
            <button onClick={secondPanel}>9</button>
            <button onClick={secondPanel}>0</button>
            <button onClick={() => setSecNumber(digit = 0)}>Clear</button>
            <button onClick={secondPanel}>.</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{answer}</p>
          <div className="numbers">
            {/* <button onClick={null}>Store</button>
            <button onClick={null}>Recall</button> */}
            </div>
        </div>
        </div>
      </div>
      )
}

      export default App