import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
   const logout = ()=>{
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  // Function to close the Bootstrap menu when a navigation item is clicked
  const closeMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  };

  // Add an event listener to close the menu when a navigation item is clicked
  useEffect(() => {
    const token = localStorage.getItem('token');
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      // Clean up the event listeners when the component unmounts
      navLinks.forEach((link) => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, [token]);

  return (
    <header>
      <div className="header">
        <div className="container-fluid">
          <div className="row d_flex" style={{ marginTop: '-25px' }}>
            <div className="col-md-2 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to="/">
                      <img src="images/coserpluss.svg" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <div className="dropdown">
                        <Link
                          to={'/'}
                          style={{ fontWeight: '500' }}
                          className="dropbtn nav-link"
                        >
                          Accueil
                        </Link>
                      </div>
                    </li>

                    <li className="nav-item">
                      <div className="dropdown">
                        <Link
                          to={'/service'}
                          style={{ fontWeight: '500' }}
                          className="dropbtn nav-link"
                        >
                          Service
                        </Link>
                        <div className="dropdown-content">
                          <Link
                            to={'/service#service-COMPTABILITEETFINANCE-id'}
                            style={{ fontWeight: '400' }}
                            className="nav-link"
                          >
                            COMPTABILITE ET FINANCE
                          </Link>
                          <Link
                            to={'/service#service-fiscal-id'}
                            style={{ fontWeight: '400' }}
                            className="nav-link"
                          >
                            SERVICES FISCAUX
                          </Link>
                          <Link
                            to={'/service#service-juridique-id'}
                            style={{ fontWeight: '400' }}
                            className="nav-link"
                          >
                            SERVICES JURIDIQUES
                          </Link>
                          <Link
                            to={'/service#service-social-id'}
                            style={{ fontWeight: '400' }}
                            className="nav-link"
                          >
                            SERVICES SOCIALES
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="dropdown">
                        <Link
                          to={'/investir'}
                          style={{ fontWeight: '500' }}
                          className="dropbtn nav-link"
                        >
                          Investir en tunisie
                        </Link>
                        <div className="dropdown-content">
                          <Link
                            style={{ fontWeight: '400' }}
                            to={'/business'}
                            className="nav-link"
                          >
                            Doing Business
                          </Link>
                          <Link
                            style={{ fontWeight: '400' }}
                            to={'/liens'}
                            className="nav-link"
                          >
                            Liens utiles
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="dropdown">
                        <Link
                          style={{ fontWeight: '500' }}
                          to={'/contact'}
                          className="dropbtn nav-link"
                        >
                          contact
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="dropdown">
                        <Link
                          style={{ fontWeight: '500' }}
                          to={'/actualité'}
                          className="dropbtn nav-link"
                        >
                          Actualités
                        </Link>
                      </div>
                    </li>
                            {token?(
                       <li className="nav-item">
                       <div className="dropdown">
                         <Link
                           style={{ fontWeight: '500' }}
                           
                           className="dropbtn nav-link"
                           onClick={logout()}
                         >
                           logout
                         </Link>
                       </div>
                     </li>
                    ):(<p></p>)}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
