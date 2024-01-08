import { useEffect } from 'react';

export function useLogoutOnRoutes(authService, location) {
  useEffect(() => {
    if (location.pathname === '/signup' || location.pathname === '/') {
      authService.logout();
    }
  }, [location.pathname, authService]);
}