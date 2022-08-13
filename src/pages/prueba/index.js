import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Prueba() {
  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <img className="d-block mx-auto mb-4" src="https://cdn-icons-png.flaticon.com/512/138/138659.png" alt="" width="90" height="90" />
          <h2>Registro de trabajador</h2>
        </div>

        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Información personal</h4>
          <form className="needs-validation" noValidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                <div className="invalid-feedback">
                  Se requiere un nombre valido.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Apellidos</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                <div className="invalid-feedback">
                  Se requiere un apellido valido.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">Nombre de usuario</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                  <div className="invalid-feedback">
                    Se requiere un nombre de usuario.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Por favor ingrese un correo valido.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                <div className="invalid-feedback">
                  Por favor ingrese su dirección.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="telefono" className="form-label">Número de teléfono</label>
                <input type="text" className="form-control" id="address" placeholder="Número de teléfono" required="" />
                <div className="invalid-feedback">
                  Por favor ingrese su número de teléfono.
                </div>
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">País</label>
                <select className="form-select" id="country" required="">
                  <option value="">Elegir...</option>
                  <option>Colombia</option>
                </select>
                <div className="invalid-feedback">
                  Por favor seleccione un país valido.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">Departamento</label>
                <select className="form-select" id="state" required="">
                  <option value="">Elegir...</option>
                  <option>Valle del cauca</option>
                </select>
                <div className="invalid-feedback">
                  Por favor seleccione un departamento valido.
                </div>
              </div>

              <hr className="my-4" />
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">Servicios a ofrecer</label>
                <select className="form-select" id="servicio" required="">
                  <option value="">Elegir...</option>
                  <option>Plomero</option>
                  <option>Cerrajero</option>
                  <option>Profesor de inglés</option>
                  <option>Paseador de perros</option>
                </select>
                <div className="invalid-feedback">
                  Por favor seleccione un servicio valido.
                </div>
              </div>

              <hr className="my-4" />

            </div>


            <h4 className="mb-3">Información de cuenta</h4>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">Nombre en la tarjeta</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                <small className="text-muted">Nombre completo como se muestra en la tarjeta</small>
                <div className="invalid-feedback">
                  El nombre en la tarjeta es necesario.
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">Número de cuenta</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                <div className="invalid-feedback">
                  El número de cuenta es necesario.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">Vencimiento</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                <div className="invalid-feedback">
                  La fecha de expiración es necesaria.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                <div className="invalid-feedback">
                  El código de seguridad es necesario.
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">Registrarse</button>
          </form>
        </div>
      </main>

    </div>
  );
}