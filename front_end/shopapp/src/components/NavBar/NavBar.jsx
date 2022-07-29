import "./NavBar.css"
import React from "react"
import { Fragment } from "react"

import { Link, Outlet } from "react-router-dom"

// import {logout} from "../../Utilities/users-service"


const NavBar = ({ user, setUser }) => {
	// function handleLogOut() {
	// 	// Delegate to the users-service
	// 	userService.logOut()
	// 	// Update state will also cause a re-render
	// 	setUser(null)
	// }


    return (
        <Fragment>
            <div className='navbar-container'>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/women'>
                        WOMEN
                    </Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to='/men'>MEN</Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to='/kids'>KIDS</Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to='/allproduct'>All Product</Link>
                    
                    
                </div>
                <Link className="logo-container" to='/'>
                    <h1>ANNA KO</h1>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/search'>SEARCH</Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to='/cart'>
                        SHOPPING CART
                    </Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to='/settings'>Profile </Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to='/auth'>LOGIN </Link>
                    {/* <Link to="" className="icon" onClick={handleLogOut}>Log Out</Link> */}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavBar