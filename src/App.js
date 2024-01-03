import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/Route/AnimatedRoutes';

function App() {
  return (
    <Router>
      <AnimatedRoutes />  
    </Router>
  );
}

export default App;
