import { useState } from 'react';
import './UserSettingPage.css';
import * as usersService from '../../Utilities/api'


export default function UserSettingPage({ user, setUser }) {
    const [username, setUsername] = useState(user.name);
    const [changed, setChanged] = useState(false);

    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: ""
    });
    const [address, setAddress] = useState(
    )
    const [phone, setPhone] = useState(
    )
    const [lastname, setLastname] = useState(
    )
    const [name, setName] = useState(
    )

    function handleChangePhone(evt) {
        // console.log("new username: " + evt.target.value);
        setPhone(evt.target.value);
    }

    function handleChangeLastname(evt) {
        // console.log("new username: " + evt.target.value);
        setLastname(evt.target.value);
    }

    function handleChangeUserName(evt) {
        // console.log("new username: " + evt.target.value);
        setUsername(evt.target.value);
    }
    function handleChangeName(evt) {
        // console.log("new username: " + evt.target.value);
        setName(evt.target.value);
    }


    function handleChangeAddress(evt) {
        // console.log("new username: " + evt.target.value);
        setAddress(evt.target.value);
    }

    async function handleSubmitUserName(evt) {
        evt.preventDefault();
        try {
            user.name = username; // update the username.
            console.log(user.lastname)
            // const newUser = await usersService.changeUsername(user);
            // setUser(newUser);
            alert("Username changed!");
        } catch (error) {
            //   setError('Change username failed - Try Again');
            console.log("error: ", error);
            alert('Change username failed - Try Again');
        }
    }

    function handleChangePassword(evt) {
        // console.log("new password: " + evt.target.value);
        setPasswords({ ...passwords, [evt.target.name]: evt.target.value });
    }
    async function handleSubmitPassword(evt) {
        evt.preventDefault();
        try {
            // console.log("passwords: ", passwords);
            user.oldPassword = passwords.oldPassword;
            user.newPassword = passwords.newPassword;
            // console.log("user", user);
            const newUser = await usersService.changePassword(user);
            setUser(newUser);
            setChanged(true)
            alert('Change password success');
        } catch {
            //   setError('Change username failed - Try Again');
            alert('Change password failed - Try Again');
        }
    }

    return (
        <div autoComplete="off" className="form-username">
            <h3>Profile page</h3>
            <form autoComplete="off" className="form-username" onSubmit={handleSubmitUserName}>
                <label>New Username</label>
                <input type="text" placeholder="New username" name="username" value={username} onChange={handleChangeUserName} required />


                    <label>Name</label>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={handleChangeName} required />
                
          
                    <label>Lastname</label>
                    <input type="text" placeholder="Lastname" name="username" value={lastname} onChange={handleChangeLastname} required />
                


                
                    <label>Address</label>
                    <input type='text'
                        name='address'
                        placeholder='Address'
                        value={address}
                        onChange={handleChangeAddress} 
                    />
                
               
                    <label>Phone Number</label>
                    <input
                        name='phone'
                        placeholder='Phone'
                        value={phone}
                        onChange={handleChangePhone}
                    />
                <button type="submit" >Submit</button>
              


            </form>



            <form autoComplete="off" className="form-password" onSubmit={handleSubmitPassword}>
                <label>Password</label>
                <input type="text" placeholder="Old password" name="oldPassword" required onChange={handleChangePassword} />
                <label>New password</label>
                <input type="text" placeholder="New password" name="newPassword"
                    onChange={handleChangePassword} required />
                {changed && <p>Password changed</p>}
                <button type="submit" >Submit</button>
            </form>
            {/* add dummy space to overcome the sticky footer */}
            <div className="dummy" />
        </div>
    );
}
