import React from 'react'

function Icon({ title,index,handleClick,zoom,top }) {
    return (
        <div className="clickable square"> 
            <img 
            src={`character/${title}/${index}.png`} 
            alt="" 
            className="img-center" 
            onClick={()=>handleClick(title,index)}
            height={60 * zoom}
            style={{ top }}
            />
        </div>
     )
}
export default Icon