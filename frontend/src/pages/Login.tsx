import React from 'react';
import LoginInput from '../components/LoginInput';
import LoginButton from '../components/LoginButton';
import Orclist from '../components/OrcList';
import LoginBackground from '../components/LoginBackground';
import '../styles/Login.css';

const Login: React.FC = () => {
  return(
    <div className="App">
        <div className="titleOrcList">
            <Orclist/>
        </div>
        <div className="loginForm">
            <label id="inputLabel">EMAIL</label>
            <LoginInput placeholder="email"/>
            <label id="inputLabel">SENHA</label>
            <LoginInput placeholder="password" type="password"/>
            <LoginButton>Login</LoginButton>
        </div>
        <LoginBackground isGreen={false}/>
        <LoginBackground isGreen/>
      </div>
  );
}

export default Login;