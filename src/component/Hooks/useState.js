import React from 'react'
import "./style.css";
const UseState = () => {


  const[myNum, setmyNum] = React.useState(15);

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

  <div className="button2" onMouseOver={() => (myNum > 0 ? setmyNum(myNum - 1): setmyNum(0))} >
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Decrement
  </div>
  
  
  
  </div>
  </>
  )
}

export default UseState;