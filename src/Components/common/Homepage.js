import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='container'>
        <h1 id='heading'>Welcome</h1>
      <div id='container-child1' className='container-chid'>
        <Link to={'/taskboard'}>
            <h1 className='links'>Taskboard</h1>
        </Link>
      </div>
      <div id='container-child2' className='container-chid'>
        <Link to={'/calculator'}>
            <h1 className='links'>Calculator</h1>
        </Link>
      </div>
      <div id='container-child3' className='container-chid'>
        <Link to={'/weather'}>
            <h1 className='links'>Weather</h1>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
