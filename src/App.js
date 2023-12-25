import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
    </Router>
  );
}

export default App;
