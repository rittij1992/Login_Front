import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './ContextAPI/UserContext';
import './App.css';
import Home from './Components/Home';
import AuthGuard from './Guard/AuthGuard';
import Auth from './Layout/Authenticate';
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path='/auth' element={<Auth/>}>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>

        <Route element={<AuthGuard/>}>
          <Route path='/' element={<Home />}></Route>
        </Route>

      </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
