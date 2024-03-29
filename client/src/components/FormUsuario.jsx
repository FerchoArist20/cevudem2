import React from 'react';
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAppContext } from '../context/Provider'
import { Form, Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function FormUsuario() {
    const params = useParams()
    const navigate = useNavigate()
    const { notif, buscarUsuario, insertarUsuario, actualizarUsuario } = useAppContext()

    const [usuario, setUsuario] = useState({
        documento: "",
        tipo_documento: "cc",
        primer_nombre: "",
        segundo_nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        correo_electronico: "",
        telefono: "",
        rol: "administrador",
        bloqueo: "0"
    })

    function reset() {
        setUsuario({
            documento: "",
            tipo_documento: "cc",
            primer_nombre: "",
            segundo_nombre: "",
            primer_apellido: "",
            segundo_apellido: "",
            correo_electronico: "",
            telefono: "",
            rol: "administrador",
            bloqueo: "0"
        })
        navigate("../")
    }

    useEffect(() => {
        const cargarUsuario = async () => {
            if (params.documento) {
                const usuario = await buscarUsuario(params.documento)
                setUsuario({
                    documento: usuario.documento,
                    tipo_documento: usuario.tipo_documento,
                    primer_nombre: usuario.primer_nombre,
                    segundo_nombre: usuario.segundo_nombre,
                    primer_apellido: usuario.primer_apellido,
                    segundo_apellido: usuario.segundo_apellido,
                    correo_electronico: usuario.correo_electronico,
                    telefono: usuario.telefono,
                    rol: usuario.rol,
                    bloqueo: usuario.bloqueo
                })
            }
        }

        cargarUsuario()
    }, [])


    return (
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
            <h4 className="mb-4 text-lg font-semibold text-gray-600 ">
                {params.documento ? `Editar usuario [${params.documento}]` : "Añadir usuario"}
            </h4>

            <Formik
                initialValues={usuario}
                enableReinitialize={true}

                onSubmit={async (values) => {
                    if (params.documento) {
                        const respuesta = await actualizarUsuario(params.documento, values,)

                        if (respuesta.error) {
                            notif("error", "Hubo un error al intentar editar el usuario.")
                        }
                        else {
                            notif("success", "Usuario editado correctamente.")
                            reset()
                        }
                    }
                    else {
                        const respuesta = await insertarUsuario(values)

                        if (respuesta.error) {
                            notif("error", "Hubo un error al intentar añadir el usuario.")
                        }
                        else {
                            notif("success", "Usuario añadido correctamente.")
                            reset()
                        }
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-4 md:grid-cols-2">
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">
                                    Tipo de documento
                                </span>
                                <select
                                    className="block w-full mt-1 text-sm form-select focus:border-primary focus:outline-none focus:shadow-outline-primary"
                                    name="tipo_documento"
                                    required
                                    onChange={handleChange}
                                    value={values.tipo_documento}
                                >
                                    <option value="cc">CC - Cédula de ciudadanía</option>
                                    <option value="ce">CE - Cédula de extranjería</option>
                                    <option value="pa">PA - Pasaporte</option>
                                </select>
                            </label>
                            <label className="block text-sm">
                                <span className="text-gray-700">Número de documento</span>
                                <div className="relative text-gray-500 focus-within:text-primary">
                                    <input
                                        className="block w-full pl-10 mt-1 text-sm text-black focus:border-primary focus:outline-none focus:shadow-outline-primary form-input"
                                        name="documento"
                                        type="text"
                                        required
                                        onChange={handleChange}
                                        value={values.documento}
                                        placeholder="Número de documento"
                                    />
                                    <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                                        <FontAwesomeIcon icon={faIdCard} />
                                    </div>
                                </div>
                            </label>
                            <label className="block text-sm">
                                <span className="text-gray-700">Nombres</span>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="relative text-gray-500 focus-within:text-primary">
                                        <input
                                            className="block w-full mt-1 text-sm text-black focus:border-primary focus:outline-none focus:shadow-outline-primary form-input"
                                            name="primer_nombre"
                                            type="text"
                                            required
                                            onChange={handleChange}
                                            value={values.primer_nombre}
                                            placeholder="Primer nombre"
                                        />
                                    </div>
                                    <div className="relative text-gray-500 focus-within:text-primary">
                                        <input
                                            className="block w-full mt-1 text-sm text-black focus:border-primary focus:outline-none focus:shadow-outline-primary form-input"
                                            name="segundo_nombre"
                                            type="text"
                                            onChange={handleChange}
                                            value={values.segundo_nombre}
                                            placeholder="Segundo nombre"
                                        />
                                    </div>
                                </div>
                            </label>
                            <label className="block text-sm">
                                <span className="text-gray-700">Apellidos</span>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="relative text-gray-500 focus-within:text-primary">
                                        <input
                                            className="block w-full mt-1 text-sm text-black focus:border-primary focus:outline-none focus:shadow-outline-primary form-input"
                                            name="primer_apellido"
                                            type="text"
                                            required
                                            onChange={handleChange}
                                            value={values.primer_apellido}
                                            placeholder="Primer apellido"
                                        />
                                    </div>
                                    <div className="relative text-gray-500 focus-within:text-primary">
                                        <input
                                            className="block w-full mt-1 text-sm text-black focus:border-primary focus:outline-none focus:shadow-outline-primary form-input"
                                            name="segundo_apellido"
                                            type="text"
                                            onChange={handleChange}
                                            value={values.segundo_apellido}
                                            placeholder="Segundo apellido"
                                        />
                                    </div>
                                </div>
                            </label>
                            <label className="block text-sm">
                                <span className="text-gray-700">Correo electrónico</span>
                                <div className="relative text-gray-500 focus-within:text-primary">
                                    <input
                                        className="block w-full pl-10 mt-1 text-sm text-black focus:border-primary focus:outline-none focus:shadow-outline-primary form-input"
                                        name="correo_electronico"
                                        type="email"
                                        required
                                        onChange={handleChange}
                                        value={values.correo_electronico}
                                        placeholder="Correo electrónico"
                                    />
                                    <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                </div>
                            </label>
                            <label className="block text-sm">
                                <span className="text-gray-700">Teléfono</span>
                                <div className="relative text-gray-500 focus-within:text-primary">
                                    <input
                                        className="block w-full pl-10 mt-1 text-sm text-black focus:border-primary focus:outline-none focus:shadow-outline-primary form-input"
                                        name="telefono"
                                        type="tel"
                                        onChange={handleChange}
                                        value={values.telefono}
                                        placeholder="Teléfono"
                                    />
                                    <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                </div>
                            </label>
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">
                                    Rol
                                </span>
                                <select
                                    className="block w-full mt-1 text-sm form-select focus:border-primary focus:outline-none focus:shadow-outline-primary"
                                    name="rol"
                                    required
                                    onChange={handleChange}
                                    value={values.rol}
                                >
                                    <option value="administrador">Administrador/a</option>
                                    <option value="ayudante">Ayudante</option>
                                </select>
                            </label>
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">
                                    Estado de bloqueo
                                </span>
                                <select
                                    className="block w-full mt-1 text-sm form-select focus:border-primary focus:outline-none focus:shadow-outline-primary"
                                    name="bloqueo"
                                    required
                                    onChange={handleChange}
                                    value={values.bloqueo}
                                >
                                    <option value="0">Desbloqueado</option>
                                    <option value="1">Bloqueado</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex gap-3">
                            <button
                                className="block font-bold px-10 py-1 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-primary focus:outline-none focus:shadow-outline-purple"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Guardar
                            </button>
                            <Link to="../">
                                <button
                                    className="block font-bold px-10 py-1 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-secondary border border-transparent rounded-lg hover:bg-secondary focus:outline-none focus:shadow-outline-purple"
                                    type="button"
                                >
                                    Volver
                                </button>
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormUsuario