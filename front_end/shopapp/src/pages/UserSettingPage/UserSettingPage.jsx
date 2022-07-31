import { useState } from 'react';
import './UserSettingPage.css';
import { changeProfile, changePassword, userProfile } from '../../Utilities/api'
import {useEffect} from 'react'

// import axios from 'axios'
export default function UserSettingPage() {
    // const [passwords, setPasswords] = useState({
    //     oldPassword: '',
    //     newPassword: ''
    // });
 
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        city: '',
        address: '',
        phone: '',
    });
    function componentDidMount() {
		//console.log('it mounted');
		// let data;
		// axios.get('http://127.0.0.1:8000/api/users/profile', { withCredentials: true})
		// 	.then((res) => {
		// 		data = res.data;
		// 		console.log(data);
               
		// 		setProfile(data);
		// 	})
		// 	.catch((err) => {});


        userProfile()
            .then(profile => setProfile(profile));
        ;
	}
	useEffect(() => {
		componentDidMount();
	}, []);


    function handleChangeProfile(evt) {
        // console.log("new username: " + evt.target.value);
        setProfile({ ...profile, [evt.target.name]: evt.target.value });
    }

    async function handleSubmitProfile(evt) {
        evt.preventDefault();
        try {
            await changeProfile(profile);
            alert('Profile change is saved successfully');
        } catch (error) {
            //   setError('Change username failed - Try Again');
            console.log("error: ", error);
            alert('Change username failed - Try Again');
        }
    }

    // function handleChangePassword(evt) {
    //     // console.log("new password: " + evt.target.value);
    //     setPasswords({ ...passwords, [evt.target.name]: evt.target.value });
    // }
    // async function handleSubmitPassword(evt) {
    //     evt.preventDefault();
    //     try {
    //         await changePassword(passwords);
    //         alert('Change password success');
    //     } catch {
    //         //   setError('Change username failed - Try Again');
    //         alert('Change password failed - Try Again');
    //     }
    // }

    return (
        <div autoComplete="off" className="form-username">
            <h3>Profile page</h3>
            <form autoComplete="off" className="form-username" onSubmit={handleSubmitProfile}>
                    <label>First name</label>
                    <input type="text" placeholder="First name" name="first_name" value={profile.first_name} onChange={handleChangeProfile}  />
                
          
                    <label>Last name</label>
                    <input type="text" placeholder="Last name" name="last_name" value={profile.last_name} onChange={handleChangeProfile}  />
                

                    <label>City</label>
                    <input type="text" placeholder="City" name="city" value={profile.city} onChange={handleChangeProfile}  />
                
                
                    <label>Address</label>
                    <input type='text'
                        name='address'
                        placeholder='Address'
                        value={profile.address}
                        onChange={handleChangeProfile} 
                    />
               
                    <label>Phone Number</label>
                    <input
                        name='phone'
                        placeholder='Phone'
                        value={profile.phone}
                        onChange={handleChangeProfile}
                    />
                <button type="submit" >Submit</button>
            </form>

            {/* <form autoComplete="off" className="form-password" onSubmit={handleSubmitPassword}>
                <label>Password</label>
                <input type="text" placeholder="Old password" name="oldPassword" value={passwords.oldPassword} required onChange={handleChangePassword} />
                <label>New password</label>
                <input type="text" placeholder="New password" name="newPassword" value={passwords.newPassword} onChange={handleChangePassword} required />
                <button type="submit" >Submit</button>
            </form> */}
            {/* add dummy space to overcome the sticky footer */}
            <div className="dummy" />
        </div>
    );
}