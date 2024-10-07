import React from 'react'
import './DONEitem.css'
import Button from '../Button'

const DONEitem = ({DONEname}) => {

    return (
        <div className="DONEitem opacity05" >
          <div className='DONEitem__name bar-style'>
          <span className='text-style'>{DONEname}</span>
          </div>
          <Button name='DELETE'/>
        </div>
    )
}

export default DONEitem