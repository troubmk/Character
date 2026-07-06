import React from 'react'


function Avatar({ body, hair, mouths, eyes, eyebrows, earrings,hats,glasses,neckwear, clothing1,clothing2,clothing3 }) {
     return (
        <div className="avatar">
            <img src={`/character/body/${body}.png`} alt="" width={260} style={{zIndex:0,position:`absolute`}}/>
            <img src={`/character/hair/${hair}.png`} alt="" width={260} style={{zIndex:4,position:`absolute`}}/>
            <img src={`/character/noses/1.png`} alt="" width={260} style={{zIndex:3,position:`absolute`}}/>
            <img src={`/character/mouths/${mouths}.png`}  alt="" width={260} style={{zIndex:3,position:`absolute`}}/>
            <img src={`/character/eyes/${eyes}.png`} alt="" width={260} style={{zIndex:3,position:`absolute`}}/>
            <img src={`/character/eyebrows/${eyebrows}.png`} alt="" width={260} style={{zIndex:3,position:`absolute`}}/>
            <img src={`/character/accessories/earrings/${earrings}.png`} alt="" width={260} style={{zIndex:4,position:`absolute`}}/>
            <img src={`/character/accessories/hats/${hats}.png`} alt="" width={260} style={{zIndex:5,position:`absolute`}}/>
            <img src={`/character/accessories/glasses/${glasses}.png`} alt="" width={260} style={{zIndex:4,position:`absolute`}}/>
            <img src={`/character/accessories/neckwear/${neckwear}.png`} alt="" width={260} style={{zIndex:4,position:`absolute`}}/>
            <img src={`/character/clothes/layer_1/${clothing1}.png`} alt="" width={260} style={{zIndex:1,position:`absolute`}}/>
            <img src={`/character/clothes/layer_2/${clothing2}.png`} alt="" width={260} style={{zIndex:2,position:`absolute`}}/>
            <img src={`/character/clothes/layer_3/${clothing3}.png`} alt="" width={260} style={{zIndex:3,position:`absolute`}}/>
         </div>
    )
}


export default Avatar