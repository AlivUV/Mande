import { useRouter } from 'next/Router'
import { Formik } from 'formik'

import useUser from '/src/hooks/useUser'
import useService from '/src/hooks/useService'

import styles from 'src/styles/Home.module.css'

export default function UserRegister() {

  const { login, isLogged } = useUser()
  const { updateServices } = useService()

  const router = useRouter()

  const handleSubmit = values => {
    updateServices()
    login('Alp', 'contra')
    //userRegister(values)
  }

  const handleCancel = evt => {
    evt.preventDefault()
    router.push("/")
  }

  return (
    <div className={styles.register}>
      <Formik
        initialValues=
        {{
          tipoServicio: ""
        }}
        onSubmit={handleSubmit}
      >
        {
          ({ handleChange, handleSubmit }) =>
          (
            <form onSubmit={handleSubmit}>
              <select
                required=""
                name="tipoServicio"
                onChange={evt => { handleChange(evt) }}
              >
                <option>Elegir servicio...</option>
                <option>Colombia</option>
              </select>
              <select required="" name="departamento" onChange={handleChange}>
                {
                  isLogged
                    ? <option value="">
                      <div>
                        Hi
                      </div>
                    </option>
                    : <option value="">Elegir trabajador... </option>
                }
              </select>
              <div className={styles.divBotones}>
                <button>Solitar servicio</button>
                <button onClick={handleCancel}>Cancelar</button>
              </div>
            </form>
          )
        }
      </Formik>
    </div >
  );
}