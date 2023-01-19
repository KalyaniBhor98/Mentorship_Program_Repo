import { useNavigate } from 'react-router-dom';
import './App.css';
import welcome1 from './welcome1.png';

function WelcomePage() {
  const navigate = useNavigate();

  const LoginPage = () => {
    navigate('/');
  }

  return (
    <div>
      <div style={{ textAlign: 'center'}}>
        <div className="imgcontainer">
          <img src={welcome1} alt="Avatar" className="avatar" />
          </div>
        <h2 style={{ color: 'blue'}}>Welcome Back!!</h2>
        <button style={{ color: 'blue', width: '200px'}} onClick={LoginPage}>Back To Login</button>
      </div>
    </div>
  );
}

export default WelcomePage;
