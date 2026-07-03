import React from 'react'
import Avatar from './component/Avatar'
import Partlist from './component/Partlist'
import './App.css'
import { useEffect, useState } from "react";

  const parts = {
        body: {
      path: 'body',
      total: 17,
   },
   earrings: {
      path: 'accessories/earrings',
      total: 32,
   },
   hats: {
      path: 'accessories/hats',
      total: 28,
   },
   glasses: {
      path: 'accessories/glasses',
      total: 17,
   },
   neckwear: {
      path: 'accessories/neckwear',
      total: 18,
   },
   eyes: {
      path: 'eyes',
      total: 24,
   },
   eyebrows: {
      path: 'eyebrows',
      total: 15,
   },
   hair: {
      path: 'hair',
      total: 73,
   },
   mouths: {
      path: 'mouths',
      total: 24,
   },
   facial_hair: {
      path: 'facial_hair',
      total: 17,
   },
  'clothing (l1)': {
        path: 'clothes/layer_1',
        total: 5 ,
    },
    'clothing (l2)': {
        path: 'clothes/layer_2',
        total: 5 ,
    },
    'clothing (l3)': {
        path: 'clothes/layer_3',
        total: 9 ,
    },
}

function App() {

    const [body, setBody] = useState(10);
    const [eyes, setEyes] = useState(2);
    const [eyebrows, setEyebrows] = useState(1);
    const [hair, setHair] = useState(1);
    const [mouths, setMouths] = useState(1);
    const [clothing1, setClothing1] = useState(1);
    const [clothing2, setClothing2] = useState(1);
    const [clothing3, setClothing3] = useState(1);
  ;

const randomAvavar = () => {
   setBody(Math.floor(Math.random()*parts.body.total)+1);
   setEyes(Math.floor(Math.random()*parts.eyes.total)+1);
   setHair(Math.floor(Math.random()*parts.hair.total));
   setEyebrows(Math.floor(Math.random()*parts.eyebrows.total)+1);
   setMouths(Math.floor(Math.random()*parts.mouths.total)+1);
   setClothing1(Math.floor(Math.random()*parts["clothing (l1)"].total)+1);
   setClothing2(Math.floor(Math.random()*parts["clothing (l2)"].total)+1);
   setClothing3(Math.floor(Math.random()*parts["clothing (l3)"].total)+1);
};

useEffect (()=>{
   randomAvavar();
},[])

  return (
    <>
    <div className="App">
        <div className="title">CHARACTER</div>
        <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
         <div className="avatar-group gap-30">
         <div> 
            <div className="avatar-wrapper">
               <Avatar body={body}
                  hair={hair}
                  mouths={mouths}
                  eyes={eyes}
                  eyebrows={eyebrows}
                  clothing1={clothing1}
                  clothing2={clothing2}
                  clothing3={clothing3}/>
            </div>
            <div className="text-center">
               <button className="button" onClick={randomAvavar}>Randomize!</button>
            </div>
         </div>
         
          <div>
            {  Object.keys(parts).map(title => (
              <Partlist title={title} total={parts[title].total} path={parts[title].path}/> 
            ))}
          </div>
          </div> 
    </div>
    </>
  )
}

export default App