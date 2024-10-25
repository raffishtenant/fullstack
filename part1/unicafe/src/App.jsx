import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Button = ({text, counter, func}) => {
  return (
      <button onClick={() => func(counter + 1)}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  return (all ?
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="average" value={(good - bad) / all}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="positive" value={good * 100 / all + " %"}/>
      </tbody>
    </table> : <>
      No feedback given
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" counter={good} func={setGood}/>
      <Button text="neutral" counter={neutral} func={setNeutral}/>
      <Button text="bad" counter={bad} func={setBad}/>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
