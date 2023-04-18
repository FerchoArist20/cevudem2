import PropTypes from 'prop-types';

import React from 'react';
import { Link } from 'react-router-dom'
import UserCard from '../components/UserCard'

function UsersList({ users }) {
    if (users.length === 0) {
        return <p className="mb-2 text-sm font-medium text-gray-600">No hay miembros en el equipo...</p>
    }
    else {
        return (
            <div className="grid gap-6 mb-8 md:grid-cols-2">
            {users.map(user => (
                <UserCard user={user} key={user.documento} />
            ))}
            </div>
        )
    }
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
  };

export default UsersList