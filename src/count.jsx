import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () =>{
    setCount(count + 1);
   
      };



  //first element is state variable and second is function variable
  const [country, setCountry] = useState("Nepal");

  const changeCountry =() => {
    setCountry("Australia");
  };




  const[name, setName] = useState("Dinesh");
  const[toShow, setToShow] = useState(true);
  const changeName = () =>{
    setName("Bishal");
    setToShow(!toShow);
  };
  return (
    <div>
      
<button onClick={incrementCount}>Increment Counter</button>
<p>{count}</p>
<button onClick={changeCountry}>Change Name</button>
 <p>{country}</p>
 <button onClick={changeName}>ShowName</button>
    {toShow &&    <p>{name}</p>}
    </div>
  )
}

export default App
