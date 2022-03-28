import React from 'react'
import logo from "./../images/Ubergrad_transparent-logo.png";
import "./Navbar.css";

const Nav = () => {
    return (
        <div className="nav-container col-12">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <button type="button" class="btn btn-transparent button-3">Countries&#9660;</button>
                <button type="button" class="btn btn-transparent button-4">Universities&#9660;</button>
                <button type="button" class="btn btn-transparent button-5">Courses&#9660;</button>
                <button type="button" class="btn btn-transparent button-6">Exams&#9660;</button>
                <button type="button" class="btn btn-transparent button-7">Events&#9660;</button>
            </div>

            <div className="nav-right">
                <div className='button-container'>
                    <button className='button-2' value='Store'>Store</button>
                    <button className='button-1' value='TALK TO COUNSELLOR'>TALK TO COUNSELLOR</button>
                </div>
                <div className='login'>Login</div>
                <div className='signup'>Signup</div>
            </div>
            
        </div>
    )
}

export default Nav;