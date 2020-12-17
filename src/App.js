import React from 'react';
import './App.css';
import img3 from './imageInSrc.jpg';

function App() {
  return (
    <div className="App "  style={{border:"solid 1px black",maxWidth:'100vw'}}>
<h1 className="title red">Your name here</h1>

<br/>

<img className="plp" src={img3}/>

<br/>

<img className="ayo" src="/imageInPublic.jpg"/>



<video style={{width:"320", height:"240"}} controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
    

    
    
  );
}

export default App;
