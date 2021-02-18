import logo from "./img/logo.png";
import logomin from "./img/logo-min.png";
import logoeafit from "./img/logo-min/logoeafit.png";
import logoces from "./img/logo-min/logoces.png";
import logoupb from "./img/logo-min/logoupb.png";
import logoeia from "./img/logo-min/logoeia.png";
import Home from "./components/Home";

import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import UserAuth from "./components/UserAuth";
import Search from "./components/Search";
import { db } from "./firebase";
import { useAuth } from "./contexts/AuthContext";
import Profile from "./components/AuthComponents/Profile";


function App() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  
  async function handleLogOut(e) {
    e.preventDefault();
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Error al cerrar la sesion");
    }
  }

  return (
    <>
      <Router>
        {/* Navigation / Menu */}
        <div className="ft">
          <nav className="navbar nfv">
            <div className="container">
              <Link to="/" className="navbar-brand">
                <img src={logomin} alt="uHaus" className="logo" />
              </Link>

              <form className="d-flex">
                <span className="navbar-text ft">
                  <strong>Contacto</strong>
                  <a href="tel:5555500" className="number space">
                    1.800.645.3456
                  </a>
                  <strong> | </strong>
                  <a href="tel:5555500" className="number">
                    <i class="fab fa-whatsapp-square"></i>
                  </a>
                  <a href="tel:5555500" className="number">
                    <i class="fas fa-envelope-square"></i>
                  </a>
                </span>
              </form>
            </div>
          </nav>
          <nav className="navbar p-0">
            <div className="container">
              <nav className="nav-one p-0">
                <div class="container">
                  <ul class="nav">
                    {!currentUser ? (
                      <li class="nav-item">
                        <Link className="nav-link bast" to="/auth">
                          <strong>Iniciar sesi&oacute;n</strong>
                        </Link>
                      </li>
                    ) : (
                      <li class="nav-item dropdown">
                        <a
                          className="nav-link bast dropdown-toggle"
                          data-bs-toggle="dropdown"
                          href="#"
                          role="button"
                          aria-expanded="false"
                        >
                          <strong>
                            <Suspense
                              fallback={
                                <div class="spinner-border" role="status">
                                  <span class="sr-only">Loading...</span>
                                </div>
                              }
                            >
                              <strong>Mi cuenta</strong>
                            </Suspense>
                          </strong>
                        </a>
                        <ul class="dropdown-menu bast-2">
                          <li>
                            <Link className="dropdown-item" to="/profile">
                              Perfil
                            </Link>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={handleLogOut}
                              href="/"
                            >
                              Cerrar sesi&oacute;n
                            </a>
                          </li>
                        </ul>
                      </li>
                    )}

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link bast dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        <strong>Informaci&oacute;n</strong>
                      </Link>
                      <ul class="dropdown-menu bast-2">
                        <li>
                          <a class="dropdown-item" href="#">
                            Privacidad
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Terminos y condiciones
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Universidades
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Bolsa de empleo
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Soporte t&eacute;cnico
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Contacto
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              <form className="d-flex">
                <span className="navbar-text">
                  <Link to="/publish">
                    <button className="btn btn-primary noto rounded-0 p-2 publish-2">
                      P&uacute;blica gratis ahora
                    </button>
                  </Link>
                </span>
              </form>
            </div>
          </nav>
        </div>
        <div className="ft-2">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <a href="/" className="navbar-brand">
                <img src={logomin} alt="uHaus" className="logo" />
              </a>
              <button
                class="navbar-toggler wander"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li class="nav-item dropdown bast">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong>Informaci&oacute;n</strong>
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <li>
                        <a class="dropdown-item bast-2" href="#">
                          Privacidad
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item bast-2" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item bast-2" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex w-100">
                  <Link to="/publish" className="w-100">
                    <button className="btn btn-primary noto bast-2 rounded-0 p-2 publish-2 w-100">
                      P&uacute;blica gratis ahora
                    </button>
                  </Link>
                </form>
                <form className="d-flex w-100 text-center">
                  <span className="navbar-text w-100">
                    <strong>Contacto</strong>
                    <a href="tel:5555500" className="number space">
                      1.800.645.3456
                    </a>
                    <strong> | </strong>
                    <a href="tel:5555500" className="number">
                      <i class="fab fa-whatsapp-square"></i>
                    </a>
                    <a href="tel:5555500" className="number">
                      <i class="fas fa-envelope-square"></i>
                    </a>
                  </span>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <Switch>
          <Route path="/auth/">
            <UserAuth />
          </Route>
          <Route path="/search/">
            <Search />
          </Route>
          <Route path="/profile/">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
