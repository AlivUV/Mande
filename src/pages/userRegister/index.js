import { useRouter } from "next/Router"
import { Formik } from 'formik'
import { useEffect } from "react"

import styles from 'src/styles/Home.module.css'

import useUser from "src/hooks/useUser"

export default function UserRegister() {

  const router = useRouter()

  const { userRegister, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) router.push("/")
  }, [isLogged, router])

  const handleSubmit = values => {
    console.log(values)
    //userRegister(values)
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
                  required=""
                  type="file"
                  placeholder="Recibo público"
                  onChange={handleChange} />
              </div>
              <input
                required=""
                name="nombres"
                placeholder="Nombres"
                onChange={handleChange}
              />
              <input
                required=""
                name="apellidos"
                placeholder="Apellidos"
                onChange={handleChange}
              />
              <input
                required=""
                name="usuario"
                placeholder="Nombre de usuario"
                onChange={handleChange}
              />
              <input
                required=""
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                onChange={handleChange}
              />
              <input
                required=""
                name="correo"
                placeholder="Correo electrónico"
                onChange={handleChange}
              />
              <input
                required=""
                name="direccion"
                placeholder="Dirección"
                onChange={handleChange}
              />
              <input
                required=""
                name="telefono"
                placeholder="Número telefónico"
                onChange={handleChange}
              />
              <select required="" name="pais" onChange={handleChange}>
                <option value="">Elegir país...</option>
                <option>Colombia</option>
              </select>
              <select required="" name="departamento" onChange={handleChange}>
                <option value="">Elegir departamento...</option>
                <option>Valle del Cauca</option>
              </select>
              <input
                required=""
                name="tipoTarjeta"
                placeholder="Tipo de tarjeta"
                onChange={handleChange}
              />
              <input
                required=""
                name="nombreTarjeta"
                placeholder="Nombre en la tarjeta"
                onChange={handleChange}
              />
              <input
                required=""
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