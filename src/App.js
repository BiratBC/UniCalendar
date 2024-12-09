import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Eventhost from './components/Eventhost';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import {useState} from "react";
function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (userDetails) => {
    setUser(userDetails); 
  };
  return (
    <>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
    <Navbar user = {user}/>
    <div>
    <Routes>
            <Route exact path="/" >
            </Route>
            <Route exact path="/login" element = {!user && <Login onLogin={handleLogin} />} > 
            </Route>
            <Route exact path = "/profile" element = {<Dashboard/>}>
            </Route>
            <Route exact path = "/host" element = {<Eventhost/>}>
            </Route>
          </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
