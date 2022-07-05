import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Post = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');


const history  = useNavigate();
const clickhere = ()=>{

 
  fetch('/posting',{
    method:"POST",
    headers:{
      "Content-Type":'application/json' ,
       "authorization": "Kush "+localStorage.getItem("jwt")
    },
    body:JSON.stringify({
      title , body ,userId:JSON.parse(localStorage.getItem("len"))
    })

  }).then(res=>res.json()).then(result =>{ 
    console.log(result)
    
    history('/')
  })
}

  return (

    <div  id="mycard" className='container card'>

    <div className="row">
          <h4 id="myid">Post-Data</h4>
      <div id="inputji" className="input-field col s6">
     
      <input value={title} onChange = {(e)=>setTitle(e.target.value)} placeholder="Title" id="textarea2" class="materialize-textarea" data-length="1200"/>
      <input value={body} onChange = {(e)=>setBody(e.target.value)} placeholder="Description" id="textarea2" class="materialize-textarea" data-length="1200"/>

      <button onClick={()=>clickhere()} id = "buttonji" class="waves-effect waves-light btn">Submit</button><br/><br/>
    
      </div>
  
  
  
    </div>
          
  
  
  
  
      </div>
  )
}

export default Post