import React from 'react'

const HeadInp = () => {
  return (
    <div>
        <div className='headinp'>
            <h1 className='headinp-h1'>Find deals for any season</h1>
            <h3 className='headinp-h3'>From cozy bed & breakfasts to luxury hotels</h3>
        </div>

        <div className='headinp-input-div'>
            <input className='headinp-inp' placeholder='Where are you going'></input>
            <input className='headinp-inp' placeholder='Checkin Date - Checkout Date'></input>
            <select>
                <option>Adult</option>
                <option>Children</option>
                <option>Rooms</option>
            </select>
            <button className='headinp-inp'>Search</button>
        </div>
    </div>
  )
}

export default HeadInp