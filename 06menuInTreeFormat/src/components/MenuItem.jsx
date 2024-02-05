import React, { useState } from 'react'
import MenuList from './MenuList'
import {FaMinus,FaPlus} from 'react-icons/fa'

function MenuItem({item}) {
  
  const [displayCurrentChildren,setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = function (getCurrentLabel){
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel],
  })
  }

  return (
    <li className=''>
      <div className='my-5 mx-5'>
      <div className='flex gap-[20px]'>
      <p className='text-xl w-[80px]'>{item.label}</p>
      {
        item && item.children && item.children.length
        ? <span className='' onClick={()=>(handleToggleChildren(item.label))}>
          {
            displayCurrentChildren[item.label] ? <FaMinus  color ='#000' size = {25}/>:<FaPlus color ='#fff' size = {25}/>
          }
        </span>
        : null
      }
      </div>
      {
        item && item.children && item.children.length >0 && displayCurrentChildren[item.label] 
        ?<MenuList list = {item.children}/>
        :null
      }
      </div>
    </li>
  )
}

export default MenuItem