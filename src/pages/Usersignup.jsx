import { Link } from "react-router-dom";
import { useState } from "react";

const Usersignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData,setUserData]=useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })
        console.log(userData);
    };
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src='/images/logo.jpg' />
                <form onSubmit={(e) => { submitHandler(e) }}>
                    <h3 className='text-lg font-medium mb-2'>What is your name?</h3>
                    <div className='flex gap-4 mb-1'>
                        <input required
                            className='px-4 py-2 w-1/2 bg-[#eeeeee] mb-6 rounded text-base border placeholder:text-base'
                            type="text"
                            placeholder='firstName'
                            value={firstName} 
                            onChange={(e)=>{
                               setFirstName(e.target.value)
                            }}/>
                        <input required
                            className='px-4 py-2 w-1/2 bg-[#eeeeee] mb-6 rounded text-lg border  placeholder:text-base'
                            type="text"
                            placeholder='lastname'
                            value={lastName} 
                            onChange={(e)=>{
                               setLastName(e.target.value)
                            }} />
                    </div>
                    <h3 className='text-lg font-medium mb-2'>What is your email?</h3>
                    <input required

                        className='px-4 py-2 bg-[#eeeeee] mb-6 rounded text-base border w-full placeholder:text-base'
                        type="email"
                        placeholder='email.example.com' 
                        value={email} 
                            onChange={(e)=>{
                               setEmail(e.target.value)
                            }}/>
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input required

                        className='px-4 py-2 bg-[#eeeeee] mb-6 rounded text-lg border w-full placeholder:text-base'
                        type="password"
                        placeholder='password'
                        value={password} 
                            onChange={(e)=>{
                               setPassword(e.target.value)
                            }} />
                    <button
                        className='px-4 py-2 bg-[#111] text-white font-semibold mb-2 rounded text-lg border w-full placeholder:text-base'
                    >Login</button>
                    <p className='text-center'>Already Have a account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
                </form>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>
                This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy  </span> and <span className='underline'>Terms of Service apply.</span>
                </p>

            </div>
        </div>
    )
}
export default Usersignup;