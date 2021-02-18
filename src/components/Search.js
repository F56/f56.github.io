import React from "react";

export default function Search() {
  return (
    <>
      <div className="container">
        <div className="card rounded-0 outside border-0 shadow">
          <div className="card-body p-0">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <select
                  className="form-select grunge rounded-0 noto"
                  aria-label="Default select example"
                  defaultValue="2"
                >
                  <option value="1">Apartamento</option>
                  <option value="2">Habitaci&oacute;n</option>
                </select>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <select
                  className="form-select grunge rounded-0 noto"
                  aria-label="Default select example"
                  defaultValue="0"
                >
                  <option value="0">Ciudad</option>
                  <option value="1">Medellin</option>
                </select>
              </div>
              <div className="col-9 col-sm-9 col-md-3 col-lg-3">
                <select
                  className="form-select grunge rounded-0 noto"
                  aria-label="Default select example"
                  defaultValue="0"
                >
                  <option value="0">Universidad</option>
                  <option value="1">EAFIT</option>
                  <option value="2">CES</option>
                  <option value="3">UPB</option>
                  <option value="4">EIA</option>
                </select>
              </div>
              <div className="col-3 col-sm-3 col-md-1 col-lg-1">
                <button type="button" className="btn btn-link grunge">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row g-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <div className="card border-0 rounded-0 shadow-sm">
              <div className="card-body noto">
                <div className="row g-2">
                  <div class="form-check form-switch col-12 col-sm-6 col-md-3 col-lg-12">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Lavado de ropa
                    </label>
                  </div>
                  <div class="form-check form-switch col-12 col-sm-6 col-md-3 col-lg-12">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Ba&ntilde;o privado
                    </label>
                  </div>
                  <div class="form-check form-switch col-12 col-sm-6 col-md-3 col-lg-12">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Internet
                    </label>
                  </div>
                  <div class="form-check form-switch col-12 col-sm-6 col-md-3 col-lg-12">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Televisi&oacute;n
                    </label>
                  </div>
                  <div class="form-check form-switch col-12 col-sm-6 col-md-3 col-lg-12">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Desayuno
                    </label>
                  </div>
                  <div class="form-check form-switch col-12 col-sm-6 col-md-3 col-lg-12">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Almuerzo
                    </label>
                  </div>
                  <div class="form-check form-switch col-12 col-sm-6 col-md-3 col-lg-12">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Cena
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9">
            <div className="row g-2">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/sbj3Y757EZpEFw4adsVVs8-768-80.jpg"
                  class="card-img-top"
                  alt="Bedroom"
                />
                <div className="card border-0 rounded-0 shadow-sm">
                  <div className="card-body noto3">
                    <p class="card-title">
                      <i class="fas fa-map-marker-alt"></i> Medell&iacute;n,
                      Colombia
                    </p>
                    <p class="card-title">
                      <i class="fas fa-map-marked-alt"></i> 165m de la EAFIT
                    </p>
                    <p class="card-title">
                      <i class="fas fa-bed"></i> Habitaci&oacute;n
                    </p>
                    <p class="card-title">
                      <i class="fas fa-dollar-sign"></i> 750,000.00 - 850,000.00
                    </p>
                  </div>
                  <div class="card-footer text-muted text-small">
                    <span class="badge bg-secondary">Desayuno</span>&nbsp;
                    <span class="badge bg-secondary">Internet</span>&nbsp;
                    <span class="badge bg-secondary">Televisi&oacute;n</span>
                    &nbsp;
                    <span class="badge bg-secondary">Lavado de ropa</span>
                    &nbsp;
                    <span class="badge bg-secondary">Ba&ntilde;o privado</span>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/sbj3Y757EZpEFw4adsVVs8-768-80.jpg"
                  class="card-img-top"
                  alt="Bedroom"
                />
                <div className="card border-0 rounded-0 shadow-sm">
                  <div className="card-body noto3">
                    <p class="card-title">
                      <i class="fas fa-map-marker-alt"></i> Medell&iacute;n,
                      Colombia
                    </p>
                    <p class="card-title">
                      <i class="fas fa-map-marked-alt"></i> 165m de la EAFIT
                    </p>
                    <p class="card-title">
                      <i class="fas fa-bed"></i> Habitaci&oacute;n
                    </p>
                    <p class="card-title">
                      <i class="fas fa-dollar-sign"></i> 750,000.00 - 850,000.00
                    </p>
                  </div>
                  <div class="card-footer text-muted text-small">
                    <span class="badge bg-secondary">Desayuno</span>&nbsp;
                    <span class="badge bg-secondary">Internet</span>&nbsp;
                    <span class="badge bg-secondary">Televisi&oacute;n</span>
                    &nbsp;
                    <span class="badge bg-secondary">Lavado de ropa</span>
                    &nbsp;
                    <span class="badge bg-secondary">Ba&ntilde;o privado</span>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/sbj3Y757EZpEFw4adsVVs8-768-80.jpg"
                  class="card-img-top"
                  alt="Bedroom"
                />
                <div className="card border-0 rounded-0 shadow-sm">
                  <div className="card-body noto3">
                    <p class="card-title">
                      <i class="fas fa-map-marker-alt"></i> Medell&iacute;n,
                      Colombia
                    </p>
                    <p class="card-title">
                      <i class="fas fa-map-marked-alt"></i> 165m de la EAFIT
                    </p>
                    <p class="card-title">
                      <i class="fas fa-bed"></i> Habitaci&oacute;n
                    </p>
                    <p class="card-title">
                      <i class="fas fa-dollar-sign"></i> 750,000.00 - 850,000.00
                    </p>
                  </div>
                  <div class="card-footer text-muted text-small">
                    <span class="badge bg-secondary">Desayuno</span>&nbsp;
                    <span class="badge bg-secondary">Internet</span>&nbsp;
                    <span class="badge bg-secondary">Televisi&oacute;n</span>
                    &nbsp;
                    <span class="badge bg-secondary">Lavado de ropa</span>
                    &nbsp;
                    <span class="badge bg-secondary">Ba&ntilde;o privado</span>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
