import React from 'react'
import Avatar from './component/Avatar'
import Partlist from './component/Partlist'
import './App.css'
import { useState } from "react";

  const parts = {
        body: {
      a: 'body',
      path: 'body',
      total: 17,
   },
   earrings: {
      a: 'earrings',
      path: 'accessories/earrings',
      total: 32,
   },
   hats: {
      a: 'hats',
      path: 'accessories/hats',
      total: 28,
   },
   glasses: {
      a: 'glasses',
      path: 'accessories/glasses',
      total: 17,
   },
   neckwear: {
      a: 'neckwear',
      path: 'accessories/neckwear',
      total: 18,
   },
   eyes: {
      a: 'eyes',
      path: 'eyes',
      total: 24,
   },
   eyebrows: {
      a: 'eyebrows',
      path: 'eyebrows',
      total: 15,
   },
   hair: {
      a: 'hair',
      path: 'hair',
      total: 73,
   },
   mouths: {
      a: 'mouths',
      path: 'mouths',
      total: 24,
   },
  'clothing (l1)': {
        a: 'clothing1',
        path: 'clothes/layer_1',
        total: 5 ,
    },
    'clothing (l2)': {
         a: 'clothing2',
        path: 'clothes/layer_2',
        total: 5 ,
    },
    'clothing (l3)': {
       a: 'clothing3',
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
      earrings: generateRandomNumber(parts.earrings.total),
      glasses: generateRandomNumber(parts.glasses.total),
      hats: generateRandomNumber(parts.hats.total),
      neckwear: generateRandomNumber(parts.neckwear.total),
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

//    const [body, setBody] = useState(10);
//    const [eyes, setEyes] = useState(2);
//    const [eyebrows, setEyebrows] = useState(1);
//    const [hair, setHair] = useState(1);
//    const [mouths, setMouths] = useState(1);
//    const [earrings, setEarrings] = useState(1);
//    const [hats, setHats] = useState(1);
//    const [glasses, setGlasses] = useState(1);
//    const [neckwear, setNeckwear] = useState(1);
//    const [clothing1, setClothing1] = useState(1);
//    const [clothing2, setClothing2] = useState(1);
//    const [clothing3, setClothing3] = useState(1);
//   ;

// const randomAvatar = () => {
//    setBody(Math.floor(Math.random()*parts.body.total)+1);
//    setEyes(Math.floor(Math.random()*parts.eyes.total)+1);
//    setHair(Math.floor(Math.random()*parts.hair.total));
//    setEyebrows(Math.floor(Math.random()*parts.eyebrows.total)+1);
//    setMouths(Math.floor(Math.random()*parts.mouths.total)+1);
//    setEarrings(Math.floor(Math.random()*parts.earrings.total));
//    setHats(Math.floor(Math.random()*parts.hats.total));
//    setGlasses(Math.floor(Math.random()*parts.glasses.total));
//    setNeckwear(Math.floor(Math.random()*parts.neckwear.total));
//    setClothing1(Math.floor(Math.random()*parts["clothing (l1)"].total)+1);
//    setClothing2(Math.floor(Math.random()*parts["clothing (l2)"].total)+1);
//    setClothing3(Math.floor(Math.random()*parts["clothing (l3)"].total)+1);
// };

// useEffect (()=>{
//    randomAvatar();
// },[])

// const handleClick = (title,index) => {
//    if(title==="body") {setBody(index)};
//    if(title==="eyes") {setEyes(index)};
//    if(title==="eyebrows") {setEyebrows(index)};
//    if(title==="hair") {setHair(index)};
//    if(title==="mouths") {setMouths(index)};
//    if(title==="earrings") {setEarrings(index)};
//    if(title==="hats") {setHats(index)};
//    if(title==="glasses") {setGlasses(index)};
//    if(title==="neckwear") {setNeckwear(index)};
//    if(title==="clothing (l1)") {setClothing1(index)};
//    if(title==="clothing (l2)") {setClothing2(index)};
//    if(title==="clothing (l3)") {setClothing3(index)};
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
               {/* <Avatar body={body} hair={hair} mouths={mouths} eyes={eyes} eyebrows={eyebrows} earrings={earrings} hats={hats} glasses={glasses} neckwear={neckwear} clothing1={clothing1} clothing2={clothing2} clothing3={clothing3}/> */}
               <div className="text-center">
               <button className="button" onClick={randomizeAvatar}>Randomize!</button>
            </div>
            </div>
         </div>
         
          <div>
            {  Object.keys(parts).map(title => (
               <div className="list-section">
                  <h2>{title}</h2>
                  
                  <Partlist 
                  title={parts[title].a} 
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