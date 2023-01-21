import React from 'react'
import imgLogin from "../assets/undraw_process_re_gws7.svg"
import "../style/login.css"
export default function LogIn() {

    const slide =()=> {
        document.querySelector(".account-img").classList.add('slide')
    }
    const slideRight = ()=> {
        document.querySelector(".account-img").classList.remove('slide')
    }

    return (
        <div className='center'>
            <div className='main-account'>
            <div className='login'>
                <div className='signup-box'>
                    <b onClick={slideRight}>Log In</b>
                    <div>
                        <h1>Sign up</h1>
                    </div>
                    <form action="">
                        <div>
                            <label htmlFor="">Username</label><br />
                            <input className='acount-input' type="username" name='username' />
                        </div>
                        <div>
                            <label htmlFor="">Email</label><br />
                            <input className='acount-input' type="email" name='username' />
                        </div>
                        <div>
                            <label htmlFor="">Password</label><br />
                            <input className='acount-input' type="password" name='username' />
                        </div>
                        <div>
                            <label htmlFor="">Confirm Password</label><br />
                            <input className='acount-input' type="password" name='username' />
                        </div>
                        <button type='submit'>Signup</button>

                        <small className='or'>Or</small>
                    </form>
                    <div className='socila-login'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-google"></i>
                    </div>

                </div>

                <div className='form-login'>
                    <b onClick={slide}>Signup</b>
                    <div>
                        <h1>Log In</h1>
                    </div>
                    <form action="#">
                        <div>
                        <label htmlFor="User-name">Username</label><br />
                        <input className='acount-input' type="text" name="username" id="username" /><br />
                        </div>
                        <div>
                        <label htmlFor="User-name">Password</label><br />
                        <input  className='acount-input' type="password" name="password" id="password" />
                        </div>
                        <div className='otherOption'>
                        <div className='remember'>
                        <input type="checkbox" name='remember' id='remember' /><label htmlFor="remember">Remember</label>
                        </div>
                        <small>Forgot My Account</small>
                        </div>
                        <button>Login</button>
                    </form>
                    <small className='or'>Or</small>
                    <div className='socila-login'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-google"></i>
                    </div>
                </div>
            </div>
            <div className='account-img '>
                <img src={imgLogin} alt="" />

            </div>
            </div>
        </div>
    )
}
