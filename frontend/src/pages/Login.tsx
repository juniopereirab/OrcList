import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import LoginButton from '../components/LoginButton';
import Orclist from '../components/OrcList';
import LoginBackground from '../components/LoginBackground';
import { login } from '../services/auth';
import '../styles/Login.css';

const Login: React.FC = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await login(email, password);
    history.push('/');
  }
  return(
    <div className="App">
        <div className="titleOrcList">
            <Orclist/>
        </div>
        <div className="loginForm">
            <label id="inputLabel">EMAIL</label>
            <LoginInput 
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <label id="inputLabel">SENHA</label>
            <LoginInput 
              placeholder="password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <LoginButton onClick={(e) => handleLogin(e)}>Login</LoginButton>
        </div>
        <LoginBackground isGreen={false}/>
        <LoginBackground isGreen/>
      </div>
  );
}

export default Login;