import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login';
import WelcomePage from './WelocomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/welcomePage" element={<WelcomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
