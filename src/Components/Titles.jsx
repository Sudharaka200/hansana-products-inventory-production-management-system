import React from 'react'

function titles(props) {
    return (
        <div>
            <h1 className='text-4xl font-bold text-gray-900 sm:text-4xl text-center mt-10'>{props.mainTitle}</h1>
            <p className='text-center  text-base text-pretty text-gray-700 sm:text-lg/relaxed '>{props.secondTitle}</p>
        </div>
    )
}

export default titles
