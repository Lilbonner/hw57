import {User} from '../../Types';
import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    isActive: '',
    role: 'User',
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
      isActive: user.isActive.toString(),
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
          value={user.name}
          onChange={changeUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
          required
        />

      </div>
      <div className="form-group">
        <label htmlFor="isActive">Active:</label>
        <select
          name="isActive"
          className="form-control"
          value={user.isActive}
          onChange={changeUser}
        >
          <option value="true">True (online)</option>
          <option value="false">False (offline)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          className="form-control"
          placeholder="select role"
          value={user.role}
          onChange={changeUser}>
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