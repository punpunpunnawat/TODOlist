import React from 'react'
import './TODOitem.css'
import Button from '../Button'

const TODOitem = ({TODOname}) => {

    return (
        <div className="TODOitem" >
          <div className='TODOitem__name bar-style'>
          <span className='text-style'>{TODOname}</span>
          </div>
          
          <Button name='EDIT'/>
          <Button name='DELETE'/>
        </div>
    )
}

export default TODOitem