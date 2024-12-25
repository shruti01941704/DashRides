
import { Link } from "react-router-dom";
import { useState } from "react";
const Userlogin = () =>{
    const [email,setEmail ] =useState('')
    const [password,setPassword]=useState('')
    const [userData,setUserData]=useState({})


    const submitHandler = (e) =>{
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        })
        console.log(userData);
        setEmail('')
        setPassword('')
    }
 return(
    <div className ='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src='/images/logo.jpg'/>
        <form  onSubmit ={(e) =>
            {submitHandler(e)}}>
            <h3 className='text-lg font-medium mb-2'>What is your email?</h3>
            <input required 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
             className='px-4 py-2 bg-[#eeeeee] mb-7 rounded text-lg border w-full placeholder:text-base' 
             type="email"
             placeholder='email.example.com'/>
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='px-4 py-2 bg-[#eeeeee] mb-7 rounded text-lg border w-full placeholder:text-base' 
            type="password"
             placeholder='password'/>
            <button
            className='px-4 py-2 bg-[#111] text-white font-semibold mb-2 rounded text-lg border w-full placeholder:text-base' 
            >Login</button>
            <p className='text-center'>New Here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
        </form>
        </div>
        <div>
            <Link to='/captain-login' className='px-4 py-2 bg-[#10b461] flex item-center justify-center text-white font-semibold mb-5 rounded text-lg border w-full placeholder:text-base'>Sign in as Captain </Link>
            
        </div>
    </div>
 )    
    
}

export default Userlogin;