import React from 'react'
import Notfound from '../image/Notfound.jpg'

const NotFound = () => {
  return (
    <div className='eror'>
    <img src={Notfound} className="Not-Found" alt = "Not Found">
      </img>
    <p className='ups'>
      Ops... Something went wrong!
    </p>
    <a href='http://localhost:3000/'>
    <button> Back to Home </button>
    </a>
      </div>
  )
}

export default NotFound