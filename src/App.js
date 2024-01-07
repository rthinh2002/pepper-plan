import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticationRoutes from './routes/AuthenticationRoutes';
import ContentRoutes from './routes/ContentRoutes';

function App() {
  return (
    <Router>
      <AuthenticationRoutes />  
      <ContentRoutes />
    </Router>
  );
}

export default App;
