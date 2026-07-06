import React from 'react'
import Icon from './Icon'

function Partlist ({ title, total, path, handleClick}) {
  const icons = [];
   for (let i = 1; i <= total; i++) {
    icons.push((<Icon title={path} index={i} zoom={1} top="50%" handleClick={handleClick}/>))
       }
  return (  
          <div className="list">{icons}</div>
  )
}


export default Partlist