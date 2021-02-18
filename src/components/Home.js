import React, { useRef, useState } from "react";
import logo from "../img/logo.png";
import logoeafit from "../img/logo-min/logoeafit.png";
import logoces from "../img/logo-min/logoces.png";
import logoupb from "../img/logo-min/logoupb.png";
import logoeia from "../img/logo-min/logoeia.png";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      {/* First BOX */}
      <div className="box">
        <div className="hero">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="">
                  <h1 className="text-white bx-size">
                    Vivir cerca a la universidad nunca fue tan f&aacute;cil,
                    publica o busca tu sitio ideal gratis
                  </h1>
                  <p className="noto text-white m-size">
                    Encuentra facilmente miles de opciones que tenemos
                    disponibles para ti &oacute; publica tu inmueble de forma
                    gratuita y empieza en el mundo de las viviendas
                    universitarias.
                  </p>
                  <div>
                    <Link to="/search">
                      <button className="btn btn-primary noto w-45 rounded-0 p-3 lookup">
                        Buscar
                      </button>
                    </Link>
                    <Link to="/publish">
                      <button className="btn btn-primary noto w-45 rounded-0 p-3 publish">
                        Publicar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="row g-2">
                  <div className="col-6">
                    <Link to="/privacy">
                      <div className="card privacidad">
                        <div className="card-body p-5 text-center text-white b-size">
                          <p className="bentto">
                            <i class="far fa-eye"></i>
                            <br />
                            Privacidad
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/verify">
                      <div className="card verificacion">
                        <div className="card-body p-5 text-center text-white b-size">
                          <p className="bentto">
                            <i class="fas fa-check-circle"></i>
                            <br />
                            Verificaci&oacute;n
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-6">
                    <div className="card uhaus">
                      <div className="card-body p-5 text-center">
                        <p className="bentto text-white b-size">&nbsp;</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <Link to="/advice">
                      <div className="card asesoria">
                        <div className="card-body p-5 text-center text-white b-size">
                          <p className="bentto p-0">
                            <i class="fas fa-people-carry"></i>
                            <br />
                            Asesorias
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-2">
        <div className="container dans">
          <div className="row g-2 mb-3 mt-3 belt">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="card border-0 eafit shadow">
                <div className="card-body">
                  <div className="row align-items-end dwt">
                    <div className="col text-center">
                      <img src={logoeafit} alt="EAFIT" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="card border-0 ces shadow">
                <div className="card-body">
                  <div className="row align-items-end dwt">
                    <div className="col text-center">
                      <img src={logoces} alt="CES" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="card border-0 upb shadow">
                <div className="card-body">
                  <div className="row align-items-end dwt">
                    <div className="col text-center">
                      <img src={logoupb} alt="UPB" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="card border-0 eia shadow">
                <div className="card-body">
                  <div className="row align-items-end dwt">
                    <div className="col text-center">
                      <img src={logoeia} alt="EIA" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-d">
          <div className="container">
            <div className="row pt-5 pb-5 g-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="card rounded-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2 verify"></div>
                      <div className="col-10">
                        <h4>Verificaci&oacute;n</h4>
                        <p className="noto">
                          En uHaus nunca revelaremos la informaci&oacute;n del
                          estudiante / propietario, sin antes realizar todos los
                          procesos de verificaci&oacute;n y estar seguros que
                          ambos lados esten de acuerdo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="card rounded-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2 helpdesk"></div>
                      <div className="col-10">
                        <h4 className="century">Asesorias</h4>
                        <p className="noto">
                          En uHaus nunca revelaremos la informaci&oacute;n del
                          estudiante / propietario, sin antes realizar todos los
                          procesos de verificaci&oacute;n y estar seguros que
                          ambos lados esten de acuerdo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="card rounded-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2 private"></div>
                      <div className="col-10">
                        <h4>Privacidad</h4>
                        <p className="noto">
                          En uHaus nunca revelaremos la informaci&oacute;n del
                          estudiante / propietario, sin antes realizar todos los
                          procesos de verificaci&oacute;n y estar seguros que
                          ambos lados esten de acuerdo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-3 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card rounded-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                <div className="row">
                                  <div className="col-12 text-center">
                                    <img
                                      src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                      alt="Avatar"
                                      className="img-fluid rounded-circle avatar"
                                    />
                                  </div>
                                  <div className="col-12 mt-2 text-center delta">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                  <div className="col-12 mt-2 text-center delta">
                                    <i className="far fa-check-circle"></i>{" "}
                                    Verificado
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                                <p className="fst-italic">
                                  " Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nunc eu scelerisque diam.
                                  Proin arcu lectus, luctus non nulla at, varius
                                  tempor nisi. Ut suscipit, velit sit amet
                                  suscipit pharetra, ligula urna commodo erat,
                                  eget tempus sapien orci ac augue."
                                </p>
                                <p className="fw-bold text-end">
                                  - Andrea Jaramillo
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                <div className="row">
                                  <div className="col-12 text-center">
                                    <img
                                      src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg"
                                      alt="Avatar"
                                      className="img-fluid rounded-circle avatar"
                                    />
                                  </div>
                                  <div className="col-12 mt-2 text-center delta">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                  </div>
                                  <div className="col-12 mt-2 text-center delta">
                                    <i className="far fa-check-circle"></i>{" "}
                                    Verificado
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                                <p className="fst-italic">
                                  " Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nunc eu scelerisque diam.
                                  Proin arcu lectus, luctus non nulla at, varius
                                  tempor nisi. Ut suscipit, velit sit amet
                                  suscipit pharetra, ligula urna commodo erat,
                                  eget tempus sapien orci ac augue."
                                </p>
                                <p className="fw-bold text-end">- Ana Lopez</p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                <div className="row">
                                  <div className="col-12 text-center">
                                    <img
                                      src="http://i.imgur.com/74sByqd.jpg"
                                      alt="Avatar"
                                      className="img-fluid rounded-circle avatar"
                                    />
                                  </div>
                                  <div className="col-12 mt-2 text-center delta">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                  </div>
                                  <div className="col-12 mt-2 text-center delta">
                                    <i className="far fa-check-circle"></i>{" "}
                                    Verificado
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                                <p className="fst-italic">
                                  " Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nunc eu scelerisque diam.
                                  Proin arcu lectus, luctus non nulla at, varius
                                  tempor nisi. Ut suscipit, velit sit amet
                                  suscipit pharetra, ligula urna commodo erat,
                                  eget tempus sapien orci ac augue."
                                </p>
                                <p className="fw-bold text-end">
                                  - Camilo Fernandez
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col pref-2"></div>
          </div>
        </div>
      </div>

      <div className="foot shadow">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <img src={logo} alt="uHaus" className="logo-foot mb-3" />
              <ul className="noto">
                <li>P&uacute;blica tu inmueble gratis.</li>
                <li>Verificaci&oacute;n inmueble.</li>
                <li>Asesorias / Estudiantes.</li>
                <li>Asesorias / Arrendadores.</li>
                <li>Publicidad.</li>
                <li>Marketing.</li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <h4 className="mb-3">Redes</h4>
              <ul className="noto">
                <li>Facebook.</li>
                <li>Twitter.</li>
                <li>Instagram.</li>
                <li>LinkIn.</li>
                <li>TikTok.</li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <h4 className="mb-3">Informaci&oacute;n</h4>
              <ul className="noto">
                <li>Pol&iacute;tica de datos.</li>
                <li>Privacidad.</li>
                <li>Terminos y condiciones.</li>
                <li>Bolsa de empleo.</li>
                <li>Contactos.</li>
              </ul>
            </div>
          </div>
          <div className="copyright text-center noto">
            Todos los derechos reservados. &copy; uHaus 2020.
            <br />
            Dise&ntilde;ado con &#10084; por uHaus Team.
          </div>
        </div>
      </div>
    </div>
  );
}
