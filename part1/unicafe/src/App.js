@@ -0,0 +1,64 @@
import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Statistics = (props) => (
  <div>
      {props.text} {props.value}
  </div>
)

const StatisticLine = (props) => (
  <div>
    <tr> 
      <td> {props.text} </td> 
      <td> {props.value} </td>
    </tr>  
  </div>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good > 0 || neutral > 0 || bad >0){
  
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <Statistics text="all" value={good+neutral+bad} />
      <Statistics text="average" value={ (1.0 * good  -1.0 *bad)/(good+neutral+bad)} />
      <Statistics text="positive" value={(good /(good+neutral+bad) * 100.0)}/>
    </div>
  )
} else {
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <h2>statistics</h2>
      <div>No feedback given</div>
    </div>
  )
}
}


export default App