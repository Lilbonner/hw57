import React, { useState } from 'react';
import { User } from '../../Types';

interface Props {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        activity: false,
        role: 'User',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const isChecked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: isChecked,
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...formData,
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                    required
                />
            </div>
            <div className="mb-2 form-check my-3 mx-1">
                <label htmlFor="checkbox" className="form-check-label fs-6">Active
                <input
                    id="checkbox"
                    type="checkbox"
                    className="form-check-input fs-6"
                    name='activity'
                    checked={formData.activity}
                    onChange={handleChange}
                /></label>
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                    name="role"
                    className="form-control"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrator</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Add</button>
        </form>
    );
};

export default UserForm;
