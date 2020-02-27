import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({anecdotes, index, title}) => {
  return (
    <div>
      <h1>{title}</h1>
      {anecdotes[index]}
    </div>
  )
};
const MostVoted = ({anecdotes, index, title, votes}) => {
  return (
    <div>
      <Anecdote anecdotes={anecdotes} index={index} title={title}/>
      <p>has {votes[index]} votes</p>
    </div>
  )
};

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick} text={text}>{text}</button>
  )
};

const App = ({anecdotes, points}) => {
  const index = () => Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(index());
  const [votes, setVoted] = useState(points);
  const next = () => {
    setSelected(index());
  };
  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVoted(copy)
  };
  const mostVoted = () => votes.indexOf(Math.max(...votes));


  return (
    <div>
      <Anecdote anecdotes={anecdotes} index={selected} title='Anecdote of the day'/>
      <Button onClick={() => vote()} text='vote'/>
      <Button onClick={() => next()} text='next anecdote'/>
      <MostVoted anecdotes={anecdotes} index={mostVoted()} votes={votes} title='Anecdote with most votes'/>
    </div>
  )
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const points = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0);

ReactDOM.render(
  <App anecdotes={anecdotes} points={points}/>,
  document.getElementById('root')
);
