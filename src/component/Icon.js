import React from 'react'

function Icon({ title,index }) {
    return (
        <div className="square"> 
            <img src={`character/${title}/${index}.png`} alt={index} className="img-center"/>
        </div>
     )
}
export default Icon