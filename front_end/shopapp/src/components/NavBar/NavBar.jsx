import "./NavBar.css"
import React from "react"
import { Fragment } from "react"

import { Link, Outlet } from "react-router-dom"

const NavBar = ({ user, setUser }) => {


    return (
        <Fragment>
            <div className='navbar-container'>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/women'>
                        Women
                    </Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to='/men'>MEN</Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to='/kids'>KIDS</Link>
                    
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
                    <Link className="nav-link" to='/auth'>LOGIN</Link>

                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavBar