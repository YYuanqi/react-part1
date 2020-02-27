import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({setVote, text}) => (
  <button onClick={() => setVote(text)}>{text}</button>
);

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <div>No Feedback given</div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={all}/>
        <Statistic text="positive" value={(good / all) * 100 + '%'}/>
        </tbody>
      </table>
    </div>
  )
};

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
};


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setVote = (vote) => {
    if (vote === 'good') {
      setGood(good + 1)
    } else if (vote === 'neutral') {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  };

  return (
    <div>
      <h1> give feedback </h1>
      <Button setVote={setVote} text='good'/>
      <Button setVote={setVote} text='neutral'/>
      <Button setVote={setVote} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root')
);
