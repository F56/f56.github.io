import React from "react";
import logo from "../img/logo-min.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./AuthComponents/Login";
import Signup from "./AuthComponents/Signup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function UserAuth() {
  const { currentUser } = useAuth();
  const history = useHistory();
  
    
  
    return (
      <>
        {currentUser ? (
          history.push("/")
        ) : (
          <div className="cover">
            <div className="row g-0 h-100">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="container">
                  <span className="close-btn">
                    <Link to="/">
                      <i class="fas fa-times"></i>
                    </Link>
                  </span>
                  <div className="container pt-5">
                    <div className="card border-0 velta">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 text-center">
                            <img src={logo} alt="uHaus" />
                            <p className="noto3">
                              Publica, busca y encuenta tu sitio ideal.
                            </p>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <Switch>
                          <Route exact path="/auth">
                            <Redirect to="/auth/signin" />
                          </Route>
                          <Route path="/auth/signin">
                            <Login />
                          </Route>
                          <Route path="/auth/signup">
                            <Signup />
                          </Route>                       
                        </Switch>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-8 bg-2"></div>
            </div>
          </div>
        )}
      </>
    );
  
}
