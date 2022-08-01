import "./NavBar.css"
import React from "react"
import { Fragment } from "react"

import { Link, Outlet } from "react-router-dom"
import { logout } from '../../Utilities/api'

const NavBar = ({ user, setUser }) => {
	async function handleLogOut() {
        await logout();
		setUser(undefined);
	}

    // console.log('user: ', user);
    const isLoggedIn = user !== undefined;
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
                    {/* <Link className="nav-link" to='/allproduct'>All Product</Link>
                     */}
                    
                </div>
                <Link className="logo-container" to='/'>
                    <h1>ANNA KO</h1>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/search'>SEARCH</Link>
                    {isLoggedIn &&
                        <div>
                            &nbsp; | &nbsp;
                            <Link className="nav-link" to='/cart'>
                                SHOPPING CART
                            </Link>
                            &nbsp; | &nbsp;
                            <Link className="nav-link" to='/settings'>PROFILE </Link>
                            &nbsp; | &nbsp;
                            <Link to="" className="icon" onClick={handleLogOut}>LOGOUT</Link>
                        </div>
                    }
                    {!isLoggedIn &&
                        // &nbsp; | &nbsp;
                        <Link className="nav-link" to='/auth'>LOGIN </Link>
                    }
                     
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavBar