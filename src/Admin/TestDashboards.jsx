import React from 'react'
import { Link } from 'react-router-dom'

function TestDashboards() {
  return (
    <div>
      {/* Test Buttons */}
      <div className='ml-20'>
        <h1 className='mt-10 font-bold r'>Test Buttons</h1>
        <Link to="/refdashbord">
          <button className='bg-amber-800 w-100 text-amber-50 mt-5 mr-5 pt-2 pb-2 pl-5 pr-5 rounded font-semibold'> Ref</button> <br />
        </Link>
        <Link to="/salestruck">
          <button className='bg-amber-800 w-100 text-amber-50 mt-5 mr-5 pt-2 pb-2 pl-5 pr-5 rounded font-semibold'> Sales Truck</button> <br />
        </Link>

        <Link to="/productmanager">
          <button className='bg-amber-800 w-100 text-amber-50 mt-5 mr-5 pt-2 pb-2 pl-5 pr-5 rounded font-semibold'> Product Manager</button> <br />

        </Link>
        <Link to="/financemanager">
          <button className='bg-amber-800 w-100 text-amber-50 mt-5 mr-5 pt-2 pb-2 pl-5 pr-5 rounded font-semibold'> Finanace Manager</button>
        </Link>
      </div>
    </div>
  )
}

export default TestDashboards
