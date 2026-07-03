import React from 'react'
import Icon from './Icon'

function Partlist ({ title, total, path}) {
  const icons = [];
   for (let i = 1; i <= total; i++) {
    icons.push((<Icon title={path} index={i}/>))
       }
  return (
       <>  <div className="list-section">
          <h2>{title}</h2> 
          <div className="click">{icons}</div>
       </div>
       
       </> 
  )
}


export default Partlist