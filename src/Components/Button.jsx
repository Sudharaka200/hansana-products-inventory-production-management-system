import React from 'react'

function Button(props) {
    return (
        <div className='mt-5'>
            <button className='bg-amber-800 text-amber-50 pt-2 pb-2 pl-5 pr-5 rounded font-semibold'>{props.secondButton}</button>
            <button className='bg-amber-300 text-amber-50 ml-3 pt-2 pb-2 pl-5 pr-5 rounded font-semibold'>{props.mainButton}</button>
        </div>
    )
}

export default Button
