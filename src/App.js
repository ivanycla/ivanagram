import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Change from './pages/Change';
import Login from './pages/Login';
import Main from './pages/Main';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/change" element={<Change />} />
    <Route path="/main" element={<Main />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
