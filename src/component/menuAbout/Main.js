import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <div className='col-md-9'>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Main