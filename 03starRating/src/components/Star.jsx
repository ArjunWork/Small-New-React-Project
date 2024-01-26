import React from 'react'

function Star({prop ='regular'}) {
  return (
    <span className='p-2'>
        <i className={`fa-${prop} fa-2xl fa-star`} style={ {color: '#FFD43B'}}></i>
    </span>
  )
}

export default Star
