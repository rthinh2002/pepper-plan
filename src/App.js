import './App.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

// Routes and services import
import AuthenticationRoutes from './routes/AuthenticationRoutes';
import ContentRoutes from './routes/ContentRoutes';
import AuthService from './services/authService';

import { useAuth } from './hooks/useAuth';
import { useRouteCheck } from './hooks/useRouteCheck';
import { useLogoutOnRoutes } from './hooks/useLogoutOnRoutes';

// Components import
import { 
  NavBar, 
  Loader, 
  Footer 
} from './components';

function App() {
  const location = useLocation();
  const authService = new AuthService();
  const isLogged = useAuth(authService);
  const isInAuthenticationRoute = useRouteCheck(location);
  useLogoutOnRoutes(authService, location);

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
