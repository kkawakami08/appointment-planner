import './App.css';
import NavBar from './NavBar/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ContactPage from './Pages/ContactPage';
import AppointmentPage from './Pages/AppointmentPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/appointment" element={<AppointmentPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
