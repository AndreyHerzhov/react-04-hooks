import { useState, useEffect, useRef } from 'react';

export default function Clicker() {
  const [count, setCount] = useState(0)
  const isFirstRender = useRef(true)
  
  useEffect(() => {
    if(isFirstRender.current) {
      console.log(isFirstRender)
      isFirstRender.current = false
      return;
    }
    
    console.log(`Выполняеться useEffect - ${Date.now()}`)
   
  });
  
    return (
      <>
        <button onClick={() => setCount(count + 1)}>First: {count}</button>
         
      </>
    );
  };