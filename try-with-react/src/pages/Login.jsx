import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            const { token, message } = response.data;
    
            if (token) {
                alert(message);
                localStorage.setItem('token', token); 
                navigate(`/root/shop`);  // Navigate to shop page
            } else {
                alert(message);
            }
        } catch (error) {
            console.error('Error:', error);
            // Show specific error message in an alert box
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            }    
        }
    };

    return (
        <div className='SignupPage'>
            <div>
                <div className='Signup-Card'>
                    <form onSubmit={handleSubmit}>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <center><h2>Login</h2></center>
                        <div className='form-group'>
                            <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                        </div>
                        <div className='form-group'>
                            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                        </div>
                        <br></br>
                        <button type='submit' className="SignupBTN">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
