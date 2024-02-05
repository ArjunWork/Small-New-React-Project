import React from 'react'
import MenuList from './MenuList'
function Index({menus = []}) {
  return (
    <div className='bg-slate-400 min-h-[100vh] w-[20vw] p-3 '>
      <div>
        <MenuList list ={menus}/>
      </div>
    </div>
  )
}

export default Index