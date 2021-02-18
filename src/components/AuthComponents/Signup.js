import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { auth, db } from "../../firebase";

export default function Signup() {
  const firstName = useRef();
  const lastName = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, addUserData } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
 

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("La contrase&ntilde;a no coinciden.");
    }
    
    setError("");
    setLoading(true);
    await signup(emailRef.current.value, passwordRef.current.value)
      .then(() => {
          addUserData(
            firstName.current.value,
            lastName.current.value,
            emailRef.current.value
          )
            .then(() => {
              console.log("Correcto.");
              history.push("/");
            })
            .cacth((error) => {
              setError(error.message);
              console.log(error.message);
            });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
    setLoading(false);
  }

  return (
    <div>
      <div className="container">
        <div className="card border-0 velta">
          <div className="card-body noto3">
            <form
              className="row g-3 needs-validation"
              onSubmit={handleSubmit}
              novalidate
            >
              <div className="col-12">
                {error && <div className="">{error}</div>}
              </div>
              <div className="col-12">
                <label for="validationName" className="form-label">
                  Nombres
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationName"
                  placeholder="John"
                  required
                  ref={firstName}
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col-12">
                <label for="validationLastName" className="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationLastName"
                  placeholder="Doe"
                  required
                  ref={lastName}
                />
                <div class="valid-feedback">Looks good!</div>
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
              <div className="col-12">
                <label for="validationPassword" className="form-label">
                  Repite la contrase&ntilde;a
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationPassword"
                  placeholder=""
                  required
                  ref={confirmPasswordRef}
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-12">
                <hr />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Al hacer cl&iacute;c en registrarme, acepto los
                    t&eacute;rminos y condiciones de uHaus.
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
                <hr />
              </div>
              <div class="col-12">
                <button
                  class="btn btn-primary w-100 noto3"
                  type="submit"
                  disabled={loading}
                >
                  Registrarme
                </button>
              </div>
              <div className="col-12">
                <p className="noto3">
                  &iquest;Ya tienes una cuenta?{" "}
                  <Link to="/auth/signin">&iexcl;Inicia sesi&oacute;n!</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
