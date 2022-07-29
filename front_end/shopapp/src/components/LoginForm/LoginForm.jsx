import { useState } from 'react';
import { login } from '../../Utilities/api'
import { useNavigate } from "react-router-dom";

import './LoginForm.css';

export default function LoginForm({ setUser }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(credentials);
      // route to home page
      navigate("../")
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" >
          <h1></h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label></label>
          <input type="text" name="username" placeholder="Enter Username" value={credentials.username} onChange={handleChange} required/>
          <label></label>
          <input type="password" placeholder='Password' name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
      </div>
    
  );
}