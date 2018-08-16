import React, { Component } from 'react';
import './App.css';
class App extends Component {
render() 
  {
    const  change = (name,des1,des2)=>{ 
      document.getElementById("image").setAttribute('src',`image/${name}.jpg`)
      document.getElementById("name").innerHTML=name
      document.getElementById("des1").innerHTML=des1
      document.getElementById("des2").innerHTML=des2
    }
    
return (
      <div className="app">
      <button onClick={()=>change("arslen","petit comme ca<====>","efficace comme ca <===================>")}>arslen</button>
      
      <button onClick={()=>change("ilyes","dima y9oul ijew bikri ,dima yji makhar","")}>ilyes</button>
      
      <button onClick={()=>change("oumaima","seybouli khdoudi u__u","")}>oumaima</button>
     
<div>
 <img id="image"/>
 <h1 id="name"></h1>
 <p id="des1"></p>
 <p id="des2"></p>
 </div>
 </div>
    );
  }
}

export default App;
