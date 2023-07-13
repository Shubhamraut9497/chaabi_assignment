import React from 'react'
import barChart3 from './barChart3.png'
function WorkersGraphChart() {
  return (
    <div className='workers__graph__chart'>
      <div className='daily__training__heading'>
          <h5>Daily Training Completions</h5>
          <p>Last 7 Days</p>
        </div>
        <img src={barChart3} alt="barChart"/>
    </div>
  )
}

export default WorkersGraphChart