import React from "react";
import './App.css';

function App1() {
  const title="Welcome to new Blog";
  const likes =80;
  //const person ={name:'Shilpa', age:34};
  const link ="http://wwww.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>  
        <p>Liked {likes} times</p> 
       {/* <p>{person}</p>*/}
       <p>{10}</p>
       <p>{"Hello Shilpa"}</p>
       <p>{[1,2,3,4,5]}</p>
       <p>{Math.random()*100}</p>
       <a href={link}>Google Site</a>
      </div> 
    </div>
  );
}

export default App;
