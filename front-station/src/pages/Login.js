import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const REDIRECT_URI = 'http://localhost:3000/login';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  };

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      axios.post('http://localhost:4000/authenticate', { code })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          navigate('/home');
        });
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <button onClick={handleLogin}>Login with GitHub</button>
      </div>
    </div>
  );
}

export default Login;
