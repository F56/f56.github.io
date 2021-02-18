import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();    
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      
      history.push("/");
    } catch {
      setError("Error al iniciar sesion.");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <div className="card border-0 velta">
          <div className="card-body noto3">
            <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
                <div className="col-12">
                    {error && <span>{error}</span>}
                </div>
              <div className="col-12">
                <label for="validationUsername" className="form-label">
                  Correo electr&oacute;nico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationUsername"
                  placeholder="correo@email.com"
                  required
                  ref={emailRef}
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col-12">
                <label for="validationPassword" className="form-label">
                  Contrase&ntilde;a
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationPassword"
                  placeholder=""
                  required
                  ref={passwordRef}
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-12 text-end">
                <p>Olvid&eacute; mi contrase&ntilde;a</p>
                <hr />
              </div>
              <div class="col-12">
                <button className="btn btn-primary w-100 noto3" type="submit" disabled={loading}>
                  Iniciar sesi&oacute;n
                </button>
              </div>
              <div className="col-12">
                <p className="noto3">
                  &iquest;A&uacute;n no tienes una cuenta?{" "}
                  <Link to="/auth/signup">&iexcl;Registrate!</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
