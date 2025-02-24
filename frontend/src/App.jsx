import React from 'react'
import Home from "./home/Home"
import Course from './courses/Courses'
import Signup from './components/Signup'
import {Routes,Route,Navigate} from "react-router-dom"
import Contact from './components/Contact'
import { useAuth } from "./context/AuthProvider";

import { Toaster } from 'react-hot-toast';

function App() {

  
  const [authUser,setAuthUser] = useAuth();
console.log(authUser);

  return (
    
      <>
        <div className=' dark:bg-slate-900 dark:text-white'>
              
     <Routes>
       <Route path='/' element ={<Home/>}></Route>
       <Route path='/course' element= {authUser?<Course/>: <Navigate to ="/signup"/>}></Route>
       <Route path='/signup' element= {<Signup/>}></Route>
       <Route path='/contact' element= {<Contact/>}></Route>
     </Routes>
     <Toaster/>
        </div>
      </>
      
 
  );
}

export default App
