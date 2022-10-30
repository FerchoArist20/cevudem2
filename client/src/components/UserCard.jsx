import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faPencil } from '@fortawesome/free-solid-svg-icons'

function UserCard({ user }) {
    if (user.bloqueo == 0) {
        return (
            <div className="min-w-0 p-2 text-white bg-primary rounded-lg shadow-xs">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
                    <div className="p-2 mr-4 text-white bg-primary rounded-full">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-lg font-bold text-black">
                            {user.primer_nombre + " " + (user.segundo_nombre ? user.segundo_nombre : "") + " " + user.primer_apellido + " " + (user.segundo_apellido ? user.segundo_apellido : "")}
                        </p>
                        <p className="mb-2 text-sm font-medium italic text-gray-700">
                            {user.rol.charAt(0).toUpperCase() + user.rol.slice(1)}
                        </p>
                        <button className="flex items-center justify-between px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-orange border border-transparent rounded-lg hover:bg-orange focus:outline-none focus:shadow-outline-purple">
                            <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
                                <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                            </svg>
                            <span>Editar</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="min-w-0 p-2 text-white bg-secondary rounded-lg shadow-xs">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
                    <div className="p-2 mr-4 text-white bg-secondary rounded-full">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-lg font-bold text-black">
                            {user.primer_nombre + " " + (user.segundo_nombre ? user.segundo_nombre : "") + " " + user.primer_apellido + " " + (user.segundo_apellido ? user.segundo_apellido : "")}
                        </p>
                        <p className="mb-2 text-sm font-medium italic text-gray-700">
                            {user.rol.charAt(0).toUpperCase() + user.rol.slice(1)}
                        </p>
                        <button className="flex items-center justify-between px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-orange border border-transparent rounded-lg hover:bg-orange focus:outline-none focus:shadow-outline-purple">
                            <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
                                <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                            </svg>
                            <span>Editar</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard