import './nav.css'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutInitiate } from '../../../redux/authAction'
import {NavDropdown} from 'react-bootstrap'
import profil from "../../../assets/img/profile_img.jpg";


const Nav = () => {
  const url = '#'
  const { currentUser } = useSelector((state) => state.user) //get data from redux
  const dispatch = useDispatch()
  // logic to hundle log out
  const hundleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate())
    }
  }

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='left-side'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
          <h3 className='nav__heading'> Wasfity </h3>
        </div>
        <div className='right-side'>
          {currentUser ? (
            
               <>
               
               <NavDropdown
                title={
                  <div className=" d-flex align-items-center">
                  
                  <img
                    src={profil}
                    width="50"
                    height="50 "
                    className="rounded-circle profile-img"
                  />
                  <p className="p-2 m-1 text-dark">Ahmed</p>
                  </div>
                }
                
                id="nav-dropdown"
              >
                
                <NavDropdown.Item eventKey="4.2">
                  My profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4" onClick={hundleAuth}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
              
            </>
          ) : (
            <>
              <Link to='/login'>
                <button className='login__btn nav__btn'> Login </button>
              </Link>
              <Link to='/register'>
                <button className='register__btn nav__btn'> Register </button>
              </Link>
            </>
          )}
          <button className='language__btn btn'> عربي </button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
