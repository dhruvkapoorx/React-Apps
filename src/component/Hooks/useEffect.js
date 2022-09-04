import React, {useState , useEffect} from 'react';
import "./style.css";
const UseEffect = () => {


  const[myNum, setmyNum] = React.useState(0);
    useEffect(() => {
     document.title = `chats(${myNum})`;
    },);
    
  return (
  <>
  <div className="center_div">
  <p>{myNum}</p>
  <div className="button2" onMouseOver={() => setmyNum(myNum + 1)}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Increment
  </div>
  </div>
  </>
  )
}

export default UseEffect;