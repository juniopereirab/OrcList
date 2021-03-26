import React, {useState, useMemo} from 'react';
import {useHistory} from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import LoginButton from '../components/LoginButton';
import LoginBackground from '../components/LoginBackground';
import '../styles/Register.css';
import userPic from '../assets/user.svg';
import {register} from '../services/auth';

const Register: React.FC = () => {
    const history = useHistory();
    const [image, setImage] = useState<any>();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const preview = useMemo(() => {
        return image ? URL.createObjectURL(image) : null;
    }, [image]);

    const handleRegister = async (e: any) => {
        e.preventDefault();

        if(email !== confirmEmail){
            alert('Os emails sao diferentes');
        }
        if(password !== confirmPassword) {
            alert('As senhas sao diferentes');
        }

        if(email === confirmEmail && password === confirmPassword) {
            const data = new FormData();
            data.append('image', image);
            data.append('name', name);
            data.append('email', email);
            data.append('password', password);

            await register(data);

            history.push('/');
        }        
    }

    return (
        <div className="App">
            <div className="registerForm">
                <label
                    id="photo"
                    style={{backgroundImage: `url(${preview})`}}
                >
                    <input type="file" id="imagePicker" onChange={(e) => setImage(e.target.files![0])}/>
                    <img src={userPic} alt="Select img" className={image ? 'has-image' : ''} />
                </label>
                <label id="inputLabel">NOME</label>
                <LoginInput
                    placeholder="Escreva seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label id="inputLabel">EMAIL</label>
                <LoginInput 
                    placeholder="Escreva seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label id="inputLabel">CONFIRME EMAIL</label>
                <LoginInput 
                    placeholder="Confirme seu email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                />
                <label id="inputLabel">SENHA</label>
                <LoginInput
                    placeholder="Digite sua senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label id="inputLabel">CONFIRME SENHA</label>
                <LoginInput
                    placeholder="Confirme sua senha"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <LoginButton onClick={(e) => handleRegister(e)}>Registrar</LoginButton>
            </div>
            <LoginBackground isGreen={false}/>
            <LoginBackground isGreen/>
        </div>
    );
}

export default Register;