import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticationRoutes from './routes/AuthenticationRoutes';
import ContentRoutes from './routes/ContentRoutes';
import NavBar from './components/Content/Settings/NavBar/NavBar';
import Loader from './components/Content/Settings/Loader/Loader';
import AuthService from './services/authService';

function App() {
  const authService = new AuthService();
  const [isLogged, setIsLogged] = useState(false);
  const [isInAuthenticationRoute, setIsInAuthenticationRoute] = useState(true);
  const [urlLocation] = useState(window.location.pathname);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if(user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  });

  useEffect(() => {
    if(urlLocation === '/signup' || urlLocation === '/') {
      setIsInAuthenticationRoute(true);
    } else {
      setIsInAuthenticationRoute(false);
    }
  }, [urlLocation]);

  return (
    <Router>
      {isLogged && <NavBar /> }
      <AuthenticationRoutes />
      {(!isLogged && !isInAuthenticationRoute) ? <Loader /> : (<ContentRoutes />)}  
    </Router>
  );
}

export default App;
