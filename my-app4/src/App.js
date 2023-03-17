//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import kmg from './asset/kmg.webp';
import jmg from './asset/jmg.jpg'

const App=() => {
  const data={
    fullName:'ADENIGBA EZEKIEL ROTIMI',
    bio:'30yrs old,dark in complexion and of average height',
    profession:'web developer',
    handleName: function (){
      return(
        alert("My name is Adenigba Ezekiel Rotimi")
      )
     }
  };
  
  return (
    <div className="App" style={{ height:"700px",backgroundImage:`url(${jmg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div style={{paddingTop:"180px"}}>
           <Profile {...data} >
           <img src={kmg}  style ={{width:"200px", height:"200px"}}alt='my photos'/></Profile>
      </div>
           
    </div>
  );
}

export default App;
