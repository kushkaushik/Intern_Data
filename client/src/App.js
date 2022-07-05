
import './App.css';
import Nav from './component/Nav';
import {BrowserRouter, Route ,Routes, useNavigate} from 'react-router-dom'
import Details from './component/Details';
import Home from './component/Home';
import Post from './component/Post';
import Signup from './component/Screen/Signup';
import Login from './component/Screen/Login';
import { createContext, useContext, useEffect, useReducer } from 'react';
import {initialState,reducer} from './reducer/UserReducer'
export const userContext = createContext();



const Routing = () =>{
const history = useNavigate()
  const {dispatch} = useContext(userContext)
  useEffect(() => {
  
    const User  = JSON.parse(localStorage.getItem("user"))
    console.log(User)
  if(User){
    dispatch({type:"USER" , payload:User})
    // history("/home")
   console.log("Hello User how are yuo")
   
  }else{
    
    history('/login')
  }
  
  
    
  }, [])
  


  return (



<Routes>
  
  {/* <Route  path='/home' element = {<Home/>} /> */}
  <Route path='/details' element = {<Details/>} />
  <Route path='/post' element = {<Post/>} />
  <Route path='/' element = {<Home/>} />
  <Route path='/signup' element = {<Signup/>} />
  <Route path='/login' element = {<Login/>} />
</Routes>

  )
}



function App() {

  const [state , dispatch] = useReducer(reducer , initialState)
  return (
    <div>
<BrowserRouter>

<userContext.Provider value={{state , dispatch}}>
<Nav/>
<Routing/>


</userContext.Provider>





</BrowserRouter>
    </div>
    
    );
}

export default App;
