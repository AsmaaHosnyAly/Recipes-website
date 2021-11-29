import "./nav.css";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../../redux/actions/authAction";
import { NavDropdown } from "react-bootstrap";
import profil from "../../../assets/img/profile_img.jpg";

const Nav = () => {
  const url = "#";
  const { currentUser } = useSelector((state) => state.user); //get data from redux
  const dispatch = useDispatch();
  // logic to hundle log out
  const hundleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="left-side">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <h3 className="nav__heading"> Wasfity </h3>
        </div>
        <div className="right-side">
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
                <NavDropdown.Item eventKey="4.2">My profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4" onClick={hundleAuth}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="login__btn nav__btn"> Login </button>
              </Link>
              <Link to="/register">
                <button className="register__btn nav__btn"> Register </button>
              </Link>

              <Link to="/wishlist" class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <span className="badge bg-danger ms-1">0</span>
              </Link>
            </>
          )}
          <Link to="/wishlist" class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#dc3545"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <span className="badge bg-danger ms-1 ">0</span>
              </Link>
          <button className="language__btn btn"> English </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
