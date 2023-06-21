import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'



function Login() {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const history=useNavigate()

async function submit(e){
    e.preventDefault();

    try{
        
        await axios.post("http://localhost:5000/login",{
            email,password
        }).then(res=>{
            if(res.data){
                
                history('/Home')
            }
            else {
                alert('user not found')
            }
        })
        .catch(e=>{
            alert('wrong deatails')
            console.log(e);

        })

    }
    catch(e){
        console.log(e);
    }
}


  return (
    <div>
        <h1> Login</h1>
        
       

 <form action='post'>
        <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='email'></input>
        <input type='email' onChange={(e)=>setPassword(e.target.value)} placeholder='password '></input>
        <input type='submit' onClick={submit} placeholder='submit'></input>
 </form>
 <br></br>
 <p>OR</p>
 <br></br>
 <Link to='/Signup'>signup</Link>

    </div>
  )
}

export default Login