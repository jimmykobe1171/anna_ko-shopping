import './UserLogOut.css';
 
 import { login } from '../../Utilities/api'
import { useNavigate } from "react-router-dom";


export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
    navigate("../")
  }

  return (
    <div className="UserLogOut">
      <div>{user.name}</div>
      <div className="email">{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}