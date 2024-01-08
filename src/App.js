import './App.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Routes and services import
import AuthenticationRoutes from './routes/AuthenticationRoutes';
import ContentRoutes from './routes/ContentRoutes';
import AuthService from './services/authService';

// Components import
import { 
  NavBar, 
  Loader, 
  Footer 
} from './components';

function App() {
  const authService = new AuthService();
  const [isLogged, setIsLogged] = useState(false);
  const [isInAuthenticationRoute, setIsInAuthenticationRoute] = useState(true);
  const location = useLocation();

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
    setIsInAuthenticationRoute(location.pathname === '/signup' || location.pathname === '/');
  }, [location.pathname]);

  return (
    <>
      {isLogged && <NavBar /> }
      <AuthenticationRoutes />
      {(!isLogged && !isInAuthenticationRoute) ? <Loader /> : (<ContentRoutes />)}  
      {isLogged && <Footer /> }
    </>
  );
}

export default App;
