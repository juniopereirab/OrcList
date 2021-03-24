import './App.css';
import LoginInput from './components/LoginInput';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <div className="App">
      <LoginInput placeholder="email@gmail.com"/>
      <LoginInput  type="password"/>
      <LoginButton>Login</LoginButton>
    </div>
  );
}

export default App;
