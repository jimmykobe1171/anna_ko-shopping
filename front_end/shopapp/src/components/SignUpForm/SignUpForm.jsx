import { useState, useContext } from "react";
import AuthContext from "../../Auth/Auth";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <hr />
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <button>Sign up</button>
      </form>
    </section>
  );
}

export default Register;
// import React, { Component } from 'react';
// import { signUp } from '../../Utilities/api';
// import './SignUpForm.css';
// export default class SignUpForm extends Component {
//   // class field syntax
  
//   state = {
//     username: '',
//     email: '',
//     password: '',
//     confirm: '',
//     error: ''
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
  
//       const formData = {...this.state};
//       delete formData.error;
//       delete formData.confirm;
//       const user = await signUp(formData);
//       console.log(user)
//       this.props.setUser(user);
//     } catch {
      
//       this.setState({error: 'Sign Up Failed - Try Again'});
//     }
//   };

//   handleChange = (evt) => {
    
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: ''
//     });
//   };

  
//   render() {
//     const disable = this.state.password !== this.state.confirm;
//     return (
//       <div>
//         <div className="form-container">
//             <h1></h1>
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
            
//             <input type="text"placeholder="Username" name="name" value={this.state.name} onChange={this.handleChange} required />
        
//             <input type="email"placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange} required />
            
//             <input type="password" placeholder='Password' name="password" value={this.state.password} onChange={this.handleChange} required />
            
//             <input type="password" placeholder='Confirm' name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//             <button type="submit" disabled={disable}>SIGN UP</button>
//           </form>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//       </div>
//     );
//   }
// }

