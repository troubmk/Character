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

function generateRandomNumber (number) {
   return Math.floor(Math.random()*number)+1;
  
}

 function randomizeAvatar () {
  return {
      body: generateRandomNumber(parts.body.total),
      eyes: generateRandomNumber(parts.eyes.total),
      eyebrows: generateRandomNumber(parts.eyebrows.total),
      hair: generateRandomNumber(parts.hair.total),
      mouths: generateRandomNumber(parts.mouths.total),
      clothing1: generateRandomNumber(parts['clothing (l1)'].total),
      clothing2: generateRandomNumber(parts['clothing (l2)'].total),
      clothing3: generateRandomNumber(parts['clothing (l3)'].total),
   }
}

function App() {
   const [avatar, setAvatar] = useState(randomizeAvatar());

   const handleClick = (title,index) => {
     setAvatar({
        ...avatar,
       [title]: index
     });
}

   //  const [body, setBody] = useState(10);
   //  const [eyes, setEyes] = useState(2);
   //  const [eyebrows, setEyebrows] = useState(1);
   //  const [hair, setHair] = useState(1);
   //  const [mouths, setMouths] = useState(1);
   //  const [clothing1, setClothing1] = useState(1);
   //  const [clothing2, setClothing2] = useState(1);
   //  const [clothing3, setClothing3] = useState(1);
  ;

// const randomAvavar = () => {
//    setBody(Math.floor(Math.random()*parts.body.total)+1);
//    setEyes(Math.floor(Math.random()*parts.eyes.total)+1);
//    setHair(Math.floor(Math.random()*parts.hair.total));
//    setEyebrows(Math.floor(Math.random()*parts.eyebrows.total)+1);
//    setMouths(Math.floor(Math.random()*parts.mouths.total)+1);
//    setClothing1(Math.floor(Math.random()*parts["clothing (l1)"].total)+1);
//    setClothing2(Math.floor(Math.random()*parts["clothing (l2)"].total)+1);
//    setClothing3(Math.floor(Math.random()*parts["clothing (l3)"].total)+1);
// };

// useEffect (()=>{
//    randomizeAvavar();
// },[])

// const handleClick = (title,index) => {
//    if(title==="body") {setBody(index)};
//    if(title==="eyes") {setEyes(index)};
//    if(title==="eyebrows") {setEyebrows(index)};
//    if(title==="hair") {setHair(index)};
//    if(title==="mouths") {setMouths(index)};
//    if(title==="clothing1") {setClothing1(index)};
//    if(title==="clothing2") {setClothing2(index)};
//    if(title==="clothing3") {setClothing3(index)};
// };

  return (
    <>
    <div className="App">
        <div className="title">CHARACTER</div>
        <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
        <div className="divider"></div>
         <div className="avatar-group gap-30">
         <div> 
            <div className="avatar-wrapper">
               <Avatar {...avatar}/>
               <div className="text-center">
               <button className="button" onClick={()=>{setAvatar(randomizeAvatar())}}>Randomize!</button>
            </div>
            </div>
         </div>
         
          <div>
            {  Object.keys(parts).map(title => (
               <div className="list-section">
                  <h2>{title}</h2>
                  
                  <Partlist 
                  title={title} 
                  total={parts[title].total} 
                  path={parts[title].path} 
                  handleClick={handleClick} 
                  /> 
                </div>
            ))}
          </div>
          </div> 
    </div>
    </>
  )
}

export default App