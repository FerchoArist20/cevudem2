import React from 'react';
import TableComponent from '../components/TableComponent'

function EventosClubPage() {

  const columns = [
    {
      id: 'codigo',
      label: 'Código',
      minWidth: 170
    },
    {
      id: 'responsable',
      label: 'Responsable',
      minWidth: 100
    },
    {
      id: 'fechainicio',
      label: 'Fecha inicio',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'fechafin',
      label: 'Fecha fin',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'unidad',
      label: 'Unidad',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'estado',
      label: 'Estado',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'acudiente',
      label: 'Acudiente',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'observaciones',
      label: 'Observaciones',
      minWidth: 170,
      align: 'right',
    },
  ];

  function createData(codigo, responsable, fechainicio, fechafin, unidad, estado, acudiente, observaciones) {
    return { codigo, responsable, fechainicio, fechafin, unidad, estado, acudiente, observaciones };
  }

  const rows = [
    createData('India', 'IN', 1324171354, 3287263, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('China', 'CN', 1403500365, 9596961, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Italy', 'IT', 60483973, 301340, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('United States', 'US', 327167434, 9833520, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Canada', 'CA', 37602103, 9984670, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Australia', 'AU', 25475400, 7692024, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Germany', 'DE', 83019200, 357578, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Ireland', 'IE', 4857000, 70273, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Mexico', 'MX', 126577691, 1972550, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Japan', 'JP', 126317000, 377973, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('France', 'FR', 67022000, 640679, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('United Kingdom', 'GB', 67545757, 242495, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Russia', 'RU', 146793744, 17098246, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Nigeria', 'NG', 200962417, 923768, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
    createData('Brazil', 'BR', 210147125, 8515767, 'sdasd', 'sdasd', 'sdasdasd', 'sdasd'),
  ];

  return (
    <div className="container px-6 mx-auto grid">
      <h2
        className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
      >
        Casa Club del Egresado &gt; Eventos
      </h2>
      <div className="flex mb-4">
        <button className="inline-flex items-center mr-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
          style={{
            backgroundColor: 'rgb(99 102 241)',
            color: 'white'
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          Crear Evento
        </button>

        <button className="inline-flex items-center mr-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Editar Evento
        </button>

        <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
          style={{
            backgroundColor: 'rgb(99 102 241)',
            color: 'white'
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Cancelar Evento
        </button>
      </div>

      <TableComponent columns={columns} rows={rows} />
    </div>
  )
}

export default EventosClubPage
