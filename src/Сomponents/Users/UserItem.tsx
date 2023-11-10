import React from 'react';
import { User } from '../../Types';

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
    return (
        <div className="card mb-2 col-10 mx-5 bg-primary">
            <div className="row no-gutters">
                <div className="col-sm-10 ">
                    <div className="card-body mx-4 fs-6 text-light">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text small">Email: {user.email}</p>
                        <p className="card-text small">Active: {!user.activity ? 'Offline' : 'Online'}</p>
                        <p className="card-text small">Role: {(user.role)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;
