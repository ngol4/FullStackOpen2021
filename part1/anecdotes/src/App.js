@@ -1,71 +0,0 @@
import React, { useState } from 'react'

const Button = (props) => (
  <button onClick= {props.handleClick} > 
  {props.text}
  </button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

const App = () => {
 
   
  const [selected, setSelected] = useState(0)

  const points = new Array(anecdotes.length).fill(0)

  const [votes,setVotes] = useState(points)

  const  getRandomInt= () => {
    return Math.floor(Math.random() * 6); //The maximum is exclusive and the minimum is inclusive
  }


  const click = () =>  {
    let index = getRandomInt()
    while (index === selected){
      index = getRandomInt()
    }
    setSelected(index)
  }

  const updateVote = () => {
    let copyPoints = [...votes]
    copyPoints[selected] +=1
    setVotes(copyPoints)
  }

  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdotes of the day</h2>
      {anecdotes[selected]}
      <p>
      <Button text="next anecdote" handleClick = {click} />
      <Button text= "vote" handleClick={updateVote}/>
      <p>has {votes[selected]} votes</p>
      </p>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVoted]}
      <p>has {votes[mostVoted]} votes</p>

    

      


    </div>
  )
}

export default App