
import "./Navi.scss";
import { Link } from "react-router-dom";
import Logo from '../images/dj-logo.png';






export default function Navbar({ user }) {
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.replace("/");
  };
 
  // console.log(user);
  
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top ">
      <div className="container-fluid ">
      <div className="bird-container bird-container--one">
		<div className="bird bird--one"></div>
	</div>
        <Link className="navbar-brand  logo" to="/" >
            <img src={Logo} alt="logo"  width= "70px" height="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item nav-item-link ">
              <Link className="nav-link active " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item nav-item-link">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item nav-item-link">
              <Link className="nav-link active" to="/blogs">
                Blogs
              </Link>
            </li>
            {user ? (
              <li className="nav-item dropdown" >
                
                <a
                href="true"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.userName} <img src={user.avatar} className="Avatar" alt="avatar" />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end animate slideIn"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/my-blogs">
                      My Blogs
                    </Link>
                  </li>
                  <li onClick={onLogout} className="dropdown-item">
                    Logout
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <a
                href="true"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Register{" "}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/signin">
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
