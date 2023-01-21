import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";

export default function Nav() {
    const [openAccount, setopenAccount] = useState(false)
    const accountLogin = () => {
        setopenAccount(true)
    }
    return (
        <header>
            <div className='navigation'>
            <div>
                <label >Donate: </label><br />
                <a href=''>Gcash qr code</a>
            </div>
            <h1>Freedom Wall</h1>
            <div className='account'>
                <div>
                    <h3>june rhomel</h3>
                    <small onClick={accountLogin}>My Account</small>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            </div>
            </div>
            {openAccount?<LogIn/>:""}
            
        </header>
    )
}