
import { signUp, userProfile } from '../../Utilities/api';
import './SignUpForm.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function SignUpForm({ setUser }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      if (state.password !== state.confirm) {
        setError('passwords does not match')
        return;
      }
      await signUp(state);
      const user = await userProfile();
      setUser(user);
      // route to home page
      navigate("../")
    } catch (err) {
      console.log('sign up error: ', err);
      setError('Sign Up Failed - Try Again')
    }
  };

  const handleChange = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.value });
    setError('');
  };

  return (
      <div>
        <div className="form-container">
            
          <form autoComplete="off" onSubmit={handleSubmit}>
            
            <input type="text"placeholder="Username" name="username" value={state.username} onChange={handleChange} required />
        
            <input type="email"placeholder='Email' name="email" value={state.email} onChange={handleChange} required />
            
            <input type="password" placeholder='Password' name="password" value={state.password} onChange={handleChange} required />
            
            <input type="password" placeholder='Confirm' name="confirm" value={state.confirm} onChange={handleChange} required />
            <button type="submit" disabled={state.password !== state.confirm}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    );

}
