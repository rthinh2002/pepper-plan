import { useState, useEffect } from 'react';

export function useAuth(authService) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = authService.onAuthChange((user) => {
      setIsLogged(!!user);
    });

    return unsubscribe; // Cleanup subscription
  }, [authService]);

  return isLogged;
}