import React, {useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { userContext } from '../App'

const Nav = () => {
  const {state,dispatch} = useContext(userContext)
const history  = useNavigate()
const dataRender = () =>{
  if(state == null){
    return [
      <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
        
    ]
  }
  
  
  else if(state){
    return [

        <li><Link  to ="/">Home</Link></li>,
        <li><Link to="/Post">Post</Link></li>,
        <button className='#f44336 red btn-small' onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history('/login')
        }}>Logout</button>
    ]
  }
}

  return (
    <div>

<nav >
    <div  id  = "Navigation" className="nav-wrapper">
      <Link to="/#" className="brand-logo">Intern</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      
        {dataRender()}
       
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Nav