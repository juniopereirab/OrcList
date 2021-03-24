import './App.css';
import LoginInput from './components/LoginInput';
import LoginButton from './components/LoginButton';
import Orclist from './components/OrcList';

function App() {
  return (
    <div className="App">
      <Orclist />
      <LoginInput placeholder="email@gmail.com"/>
      <LoginInput/>
      <LoginButton>Login</LoginButton>
    </div>
  );
}

export default App; 
