import './nav.css'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutInitiate } from '../../../redux/actions/authAction'
import { NavDropdown } from 'react-bootstrap'
import profil from '../../../assets/img/profile_img.jpg'

const Nav = () => {
  const _recipes = useSelector((state) => state.wishlist.recipes)
  const { currentUser } = useSelector((state) => state.user)
  console.log(_recipes) //get data from redux
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
          <Link to='/'>
            <h3 className='nav__heading text-dark'> Wasfity </h3>
          </Link>
        </div>
        <div className='right-side'>
          {currentUser ? (
            <>
              <NavDropdown
                title={
                  <div className=' d-flex align-items-center'>
                    <img
                      src={profil}
                      width='50'
                      height='50 '
                      className='rounded-circle profile-img'
                      alt='...'
                    />
                    <p className='login__btn'>{currentUser.displayName}</p>
                  </div>
                }
                id='nav-dropdown'
              >
                <NavDropdown.Item eventKey='4.2'>
                  <Link to='/profile'>My profile</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item eventKey='4.4' onClick={hundleAuth}>
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
          <Link to='/profile' class='d-flex align-items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='#dc3545'
              class='bi bi-heart-fill'
              viewBox='0 0 16 16'
            >
              <path
                fill-rule='evenodd'
                d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
              />
            </svg>
            <span className='badge bg-danger ms-1 '>{_recipes.length}</span>
          </Link>
          <button className='language__btn btn'> English </button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
