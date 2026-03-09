
import {useState,useEffect} from "react";
export default function List(){
  const myList=[
    {id:1,
      name:"Apple"
    },
    {
      id:2,
      name:"Banana"
    },
    {
      id:3,
      name:"papaya"
    },
    {
      id:4,
      name:"WaterMelon"
    },
    {
      id:5,
      name:"Grapes"
    }

  ]


  const [fruits,setFruits]=useState(myList);

  function shuffleFruits(fruits){
    let shuffledFruits=[...fruits];
    
    for(let index=shuffledFruits.length-1;index>0;index--){
      const randomIndex=Math.floor(Math.random()*(index+1));
      [shuffledFruits[randomIndex],shuffledFruits[index]]=[shuffledFruits[index],shuffledFruits[randomIndex]]

    }
    return shuffledFruits;
  }

  function removeFruit({id}){
    setFruits(fruits.filter(fruit=>fruit.id!==id));

  }

  useEffect(()=>{
    const interval=setInterval(()=>{
      setFruits(prev=>shuffleFruits(prev));
    },2000);
    return ()=>clearInterval(interval);
  },[]);

  return(
    <ul style={{listStyle:"none",textAlign:"center",marginTop:"100px"}}>
      {fruits.map(fruit=><li key={fruit.id}>
        {/* <label for={fruit.id}>{fruit.name}</label> */}
        <input id={fruit.id} type="text" name={fruit.name}  value={fruit.name}/>
        <button onClick={()=>removeFruit(fruit)}>X</button>
      </li>)}
    </ul>
  )

}