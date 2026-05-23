import React from 'react'
import "../Login/Login.css"
import Button from "../../Components/Props/Button"


const Login = () => {
  return (
    <section className='login_container'>
        <article className='login_left'>
          <article className='login_left_holder'>
            <div className='login_input'>
              <h3>Welcome Back Admin</h3>
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
              <input type="text" placeholder='Enter Password'/>
              <p>Forget Password</p>
            </div>
            <div className='login_btn_holder'>
              <Button className= "login_btn" text= "Sign in"/>
              
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
