import React from 'react'
import barChart from './barChart2.png'
function DailyTraining() {
  return (
    <div className='daily__training__completion'>
        <div className='daily__training__heading'>
          <h5>Daily Training Completions</h5>
          <p>Last 7 Days</p>
        </div>
        <img src={barChart} alt="barChart"/>
    </div>
  )
}

export default DailyTraining