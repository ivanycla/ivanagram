import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Change from './pages/Change';
import Login from './pages/Login';
import Main from './pages/Main';
import UserPage from './pages/UserPage';
import Chat from './pages/Chat';
import Subscribers from './pages/Subscribers'
import YourSubs from './pages/YourSubs';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/change" element={<Change />} />
    <Route path="/main" element={<Main />} />
    <Route path="/userProfile/:username" element={<UserPage />} />
    <Route path="/Chat/:username" element={< Chat/>} />
    <Route path="/subs/" element={< Subscribers/>} />
    <Route path="/yorSubs/" element={< YourSubs/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
