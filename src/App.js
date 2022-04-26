import React, { useState } from 'react';
import UseEffectAPI from './component/useEffectAPI';
import './App.css'

const App = () => {
  // console.log(useState('Poonam'));
  // var val = "Poonam Bhilare";

  const [val, setVal] = useState("Poonam Bhilare");

  const changeName = () => {
    // val ='Hello Everyone';
    // console.log(val);

    // let val2 = val;

    if (val === "Poonam Bhilare") {
      setVal('Hello Everyone');
    }
    else {
      setVal("Poonam Bhilare");
    }


  }
  console.log(val);
  return (
    <div>
      {/* <h1>{val}</h1>
      <button className='btn' onClick={changeName}>Click me plz</button> */}
      <UseEffectAPI />
    </div>
  )
}

export default App

