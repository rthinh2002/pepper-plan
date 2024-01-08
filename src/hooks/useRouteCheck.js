import { useMemo } from 'react';

export function useRouteCheck(location) {
  return useMemo(() => {
    return location.pathname === '/signup' || location.pathname === '/';
  }, [location.pathname]);
}