import React from 'react'

const Profile= (props)=>{
    
    return(
        <div>
            <span>{props.children}</span>
            <h1 style={{color:"#F4F2F3"}}>{props.fullName}</h1>
            <h2 style={{color:"#F4F2F3"}}>{props.bio}</h2>
            <h3 style={{color:"#F4F2F3"}}>Iam a {props.profession} by profession</h3>
            <div style={{width:"200px",border:"solid #C3CBD6",marginLeft:"650px",borderRadius:"7px"}}>
               <button  onClick={props.handleName} style={{fontSize:"51px",backgroundColor:"#2A403D",color:"#F4F2F3"}} >
                click me</button>
            </div>

        </div>
    );
}
export default Profile