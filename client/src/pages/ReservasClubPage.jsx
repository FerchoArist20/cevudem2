import React from 'react';
import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useAppContext } from '../context/Provider'
import TableComponent from '../components/TableComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import FormReserva from '../components/FormReserva'

function PersonasPage() {
  const { notif, reservas, buscarReservas, eliminarReserva } = useAppContext()

  useEffect(() => {
    buscarReservas()
  }, [])

  function borrarReserva(id) {
    Swal.fire({
      title: 'Eliminar reserva',
      text: `¿Está seguro/a de eliminar la reserva ${id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c92534',
      cancelButtonColor: '#7a7a7a',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarReserva(id)

        if (respuesta.error) {
          notif("error", "Hubo un error al intentar eliminar la reserva.")
        }
        else {
          notif("success", "Reserva eliminada correctamente.")
        }
      }
    })
  }

  const columns = [
    {
      id: 'id',
      label: '#'
    },
    {
      id: 'socio',
      label: 'Documento del socio'
    },
    {
      id: 'fecha_hora_inicio',
      label: 'Fecha/hora de inicio'
    },
    {
      id: 'fecha_hora_fin',
      label: 'Fecha/hora de fin'
    },
    {
      id: 'habitacion',
      label: 'Habitación'
    },
    {
      id: 'numero_agregados',
      label: 'Acompañantes'
    },
    {
      id: 'estado',
      label: 'Estado'
    },
    {
      id: 'opciones',
      label: 'Opciones'
    }
  ]

  let rows = reservas.map((r) => {
    return {
      id: r.id,
      socio: r.socio,
      fecha_hora_inicio: new Date(r.fecha_hora_inicio).toLocaleDateString() + " " + new Date(r.fecha_hora_inicio).toLocaleTimeString(),
      fecha_hora_fin: new Date(r.fecha_hora_fin).toLocaleDateString() + " " + new Date(r.fecha_hora_fin).toLocaleTimeString(),
      habitacion: r.habitacion,
      numero_agregados: r.numero_agregados,
      estado: r.estado[0].toUpperCase() + r.estado.slice(1),
      opciones: (
        <div className="flex items-center">
          <Link to={`./edit/${r.id}`} className="mr-1">
            <button className="flex items-center justify-between px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-orange border border-transparent rounded-md hover:bg-orange focus:outline-none focus:shadow-outline-purple">
              <svg className="w-4 h-4" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
                <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
              </svg>
            </button>
          </Link>
          <button
            className="flex items-center justify-between px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-secondary border border-transparent rounded-md hover:bg-secondary focus:outline-none focus:shadow-outline-purple"
            onClick={() => { borrarReserva(r.id) }}
          >
            <svg className="w-4 h-4" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </svg>
          </button>
        </div>
      )
    }
  })

  return (
    <div className="container px-6 mx-auto grid">
      <div className="flex items-center justify-between">
        <h2
          className="my-6 text-2xl font-semibold text-dark"
        >
          Reservas
        </h2>
        <div className="my-6 flex mb-4">
          <Link to="./add">
            <button className="flex items-center justify-between px-4 py-2 mb-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-500 focus:outline-none focus:shadow-outline-purple">
              <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
                <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
              </svg>
              <span>Añadir reserva</span>
            </button>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<TableComponent columns={columns} rows={rows} />} />
        <Route path="/add" element={<FormReserva/>} />
        <Route path="/edit/:id" element={<FormReserva/>} />
      </Routes>
    </div>
  )
}

export default PersonasPage