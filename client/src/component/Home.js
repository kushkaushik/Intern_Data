import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  localStorage.setItem("len",data.length+1)
const history =  useNavigate();

  const viewData = (myid) =>{
    fetch('/view/'+myid,{
      
      method:"GET",
      headers:{
        "authorization": "Kush "+localStorage.getItem("jwt")
  
       }


    }).then(res=>res.json()).then(result=>{
      console.log(result)
      localStorage.setItem("title",JSON.stringify(result.data.title))
      localStorage.setItem("body",JSON.stringify(result.data.body))
      localStorage.setItem("id",JSON.stringify(result.data.userId))

      localStorage.setItem("name" , JSON.stringify(result.data.postedBy.name))
      localStorage.setItem("email" , JSON.stringify(result.data.postedBy.email))


      history('/details')
    })
}


  useEffect(() => {
    fetch("/getData",{
      method:"GET",
      headers:{
        "authorization": "Kush "+localStorage.getItem("jwt")
  
       }
    }).then(res=>res.json()).then(result=>{
      console.log(result)
      setData(result.mydata);
    })
  
  
  }, [])
  

 

  return (


    

    <div className='container my-4'>
        <h4 style = {{marginLeft:"38%",padding:"0 3%"}}>LIST-DATA</h4>
<table className='centered card'>
        <thead>
          <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
          </tr>
        </thead>
{data.map((e)=>{
  return(
    <>
    
    <tbody>
          <tr>
           
            <td>{e.userId}</td>
            <td>{e.title}</td>
            <td>{e.body}</td>
            <div style={{textAlign:"center",marginTop:"5%"}}>
            <button onClick={()=>viewData(e._id)} className='btn btn-success btn-small'>View</button>
            </div>
          </tr>

        </tbody>
    

    </>
  )
})}
     



      </table>
            
      <Link style={{marginLeft:"44%"}} to = "/post"><button  style={{marginRight:"7px"}}  className="waves-effect waves-light btn">Add-Data</button></Link>
    </div>
  )
}

export default Home