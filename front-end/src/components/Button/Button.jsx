import React from 'react'
import './Button.css'

const Button = ({name}) => {

    return (
        <div className="Button" >
          <span className='text-style'>{name}</span>
          
        </div>
    )
}

export default Button