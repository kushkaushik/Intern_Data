import React, { } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Details = () => {
const history = useNavigate()
  const backbutton = () =>{
    history('/')
    
  }


const title = JSON.parse(localStorage.getItem("title"))
const body = JSON.parse(localStorage.getItem("body"))
const id = JSON.parse(localStorage.getItem("id"))
const name = JSON.parse(localStorage.getItem("name"))
const email = JSON.parse(localStorage.getItem("email"))

return (


    

  <div className='container my-4'>
      <h4 style = {{marginLeft:"38%",padding:"0 3%"}}>DETAILS-DATA</h4>
<table className='centered card'>
      <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
      </thead>

      {
  
    <>
    
    <tbody>
          <tr>
           
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
           
          </tr>

        </tbody>
    

    </>
  
}



    </table>




{/* Desc */}
<br/>
<hr/>
<br/>

<h5 style = {{marginLeft:"38%",padding:"0 3%"}}>USER-DETAILS</h5>
    <table className='centered card'>
      <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            
        </tr>
      </thead>


      <tbody>
          <tr>
           
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
           
          </tr>

        </tbody>



</table>
   <br/>
   
          
    <button onClick={()=>backbutton()} style={{marginLeft:"44%"}}  className="waves-effect waves-light btn">Back</button>
  </div>
)
}

export default Details