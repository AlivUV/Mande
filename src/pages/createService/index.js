import { useRouter } from "next/Router"
import { Formik } from 'formik'

import styles from 'src/styles/Home.module.css'

export default function UserRegister() {

  const router = useRouter()

  const handleSubmit = values => {
    console.log(values)
  }

  const handleCancel = (evt) => {
    evt.preventDefault()
    router.push("/")
  }

  return (
    <div className={styles.register}>
      <Formik
        initialValues=
        {{
          recibo: "",
          nombres: "",
          apellidos: "",
          usuario: "",
          contrasena: "",
          correo: "",
          direccion: "",
          telefono: "",
          pais: "",
          departamento: "",
          tipoTarjeta: "",
          nombreTarjeta: "",
          numeroTarjeta: ""
        }}
        onSubmit={handleSubmit}
      >
        {
          ({ handleChange, handleSubmit }) =>
          (
            <form onSubmit={handleSubmit}>
              <div className="custom-file">
                <input
                  type="file"
                  placeholder="Recibo público"
                  onChange={handleChange} />
              </div>
              <input
                name="nombres"
                placeholder="Nombres"
                onChange={handleChange}
              />
              <input
                name="apellidos"
                placeholder="Apellidos"
                onChange={handleChange}
              />
              <input
                name="usuario"
                placeholder="Nombre de usuario"
                onChange={handleChange}
              />
              <input
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                onChange={handleChange}
              />
              <input
                name="correo"
                placeholder="Correo electrónico"
                onChange={handleChange}
              />
              <input
                name="direccion"
                placeholder="Dirección"
                onChange={handleChange}
              />
              <input
                name="telefono"
                placeholder="Número telefónico"
                onChange={handleChange}
              />
              <input
                name="pais"
                placeholder="País"
                onChange={handleChange}
              />
              <input
                name="departamento"
                placeholder="Departamento"
                onChange={handleChange}
              />
              <input
                name="tipoTarjeta"
                placeholder="Tipo de tarjeta"
                onChange={handleChange}
              />
              <input
                name="nombreTarjeta"
                placeholder="Nombre en la tarjeta"
                onChange={handleChange}
              />
              <input
                name="numeroTarjeta"
                placeholder="Número de la tarjeta"
                onChange={handleChange}
              />
              <button>Registrar usuario</button>
              <button onClick={handleCancel}>Cancelar</button>
            </form>
          )
        }
      </Formik>
    </div >
  );
}