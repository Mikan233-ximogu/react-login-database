import './App.css';

import UserLoginComponent from './Pages/UserLogin';
// import MainLayout from './Pages/MainLayout';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router,Route,Routes, Navigate, replace } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element = {<UserLoginComponent />} />
        {/* <Route path='/admin' element = {<MainLayout />} /> */}
        <Route path='/signup' Component = {SignUp}  />
        <Route path='/' element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
