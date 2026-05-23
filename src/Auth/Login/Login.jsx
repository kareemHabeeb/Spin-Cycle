import React from 'react'
import "../Login/Login.css"
import Button from "../../Components/Props/Button"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


const Login = () => {
  return (
    <section className='login_container'>
        <article className='login_left'>
          <article className='login_left_holder'>
            <div className='login_input'>
              <h2 style={{color: "blue"}}>Welcome Back Admin</h2>
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
              <input type="text" placeholder='Enter Password'/>
              <p>Forget Password</p>
            </div>
            <div className='login_btn_holder'>
              <Button className= "login_btn" text= "Sign in"/>
              OR
              <p className='login_icon'><FcGoogle />Continue sign in with Google</p>
              <p className='login_icon'><FaApple />Continue sign in with Apple ID</p>
            </div>
          </article>
        </article>
      <article className='login_right'>
         <img className="loginImg" src="src/assets/image 6.png" alt="" />
      </article>
    </section>
  )
}

export default Login
