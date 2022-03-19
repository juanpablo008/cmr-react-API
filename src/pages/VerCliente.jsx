import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"


const VerCliente = () => {

  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      setCargando(!cargando)
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {
        console.log(error)
      }
      setCargando(false)
    }
    obtenerClienteAPI()
  }, [])

  return (
    
    cargando ? <Spinner/> : (
      Object.keys(cliente).length === 0 ? <p>El cliente que está consultando no es valido</p> : (
        <div>
          <h1 className='font-black text-4xl text-blue-900'>Ver Cliente: {cliente.nombre}</h1>
          <p className='mt-3'>Información del Cliente</p>

          <p className="text-4xl text-gray-600 mt-10">
            <span className="text-gray-700 uppercase font-bold">cliente: </span>
            {cliente.nombre}
          </p>

          <p className="text-2xl text-gray-600 mt-4">
            <span className="text-gray-700 uppercase font-bold">email: </span>
            {cliente.email}
          </p>

          <p className="text-2xl text-gray-600 mt-4">
            <span className="text-gray-700 uppercase font-bold">telefono: </span>
            {cliente.telefono}
          </p>

          <p className="text-2xl text-gray-600 mt-4">
            <span className="text-gray-700 uppercase font-bold">empresa: </span>
            {cliente.empresa}
          </p>

          {cliente.notas && (
            <p className="text-2xl text-gray-600 mt-4">
            <span className="text-gray-700 uppercase font-bold">notas: </span>
            {cliente.notas}
          </p>
          )}
        </div>
      )
    )
  )
}

export default VerCliente