import {User} from '../../Types';
import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [dish, setDish] = useState({
    name: '',
    email: '',
    isActive: '',
    role: 'User',
  });

  const changeDish = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setDish(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...dish,
      isActive: dish.isActive.toString(),
    });
  };


  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new dish</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={dish.name}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          value={dish.email}
          onChange={changeDish}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
          required
        />

      </div>
      <div className="form-group">
        <label htmlFor="isActive">Active:</label>
        <select
          name="isActive"
          className="form-control"
          value={dish.isActive}
          onChange={changeDish}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          className="form-control"
          placeholder="select role"
          value={dish.role}
          onChange={changeDish}>
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