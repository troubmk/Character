import React from 'react'


function Avatar({ body, hair, mouths, eyes, eyebrows, clothing1,clothing2,clothing3 }) {
     return (
        <div className="avatar">
            <img src={`/character/body/${body}.png`} style={{zIndex:0,position:`absolute`}}/>
            <img src={`/character/hair/${hair}.png`} style={{zIndex:4,position:`absolute`}}/>
            <img src={`/character/noses/1.png`} style={{zIndex:3,position:`absolute`}}/>
            <img src={`/character/mouths/${mouths}.png`}  style={{zIndex:3,position:`absolute`}}/>
            <img src={`/character/eyes/${eyes}.png`} style={{zIndex:3,position:`absolute`}}/>
            <img src={`/character/eyebrows/${eyebrows}.png`} style={{zIndex:3,position:`absolute`}}/>
            <img src={`/character/clothes/layer_1/${clothing1}.png`} style={{zIndex:1,position:`absolute`}}/>
            <img src={`/character/clothes/layer_2/${clothing2}.png`} style={{zIndex:2,position:`absolute`}}/>
            <img src={`/character/clothes/layer_3/${clothing3}.png`} style={{zIndex:3,position:`absolute`}}/>
         </div>
    )
}


export default Avatar