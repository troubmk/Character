import React from 'react'

function Icon({ title, path,index,handleClick,zoom,top }) {
    return (
        <div className="clickable square"> 
            <img 
            src={`character/${path}/${index}.png`} 
            alt={index} 
            className="img-center" 
            onClick={()=>handleClick(title,index)}
            height={60 * zoom}
            style={{ top }}
            />
        </div>
     )
}
export default Icon