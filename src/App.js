import './App.css';
import NavBar from './NavBar/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ContactPage from './Pages/ContactPage/ContactPage';
import AppointmentPage from './Pages/AppointmentPage';
import HomePage from './Pages/HomePage/HomePage';
import {useState} from 'react';

function App() {
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([
    {
      name: "Lola",
      date: "05/15/23",
      time: "10:00 AM",
      id: 1
    },
  ])
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage
          contacts={contacts}
          appointments={appointments}
        />} />
        <Route path="/contact" element={<ContactPage 
          contacts={contacts}
          setContacts={setContacts}/>} />
        <Route path="/appointment" element={<AppointmentPage/>} 
          appointments={appointments}
          setAppointments={setAppointments}
        />
      </Routes>
    </Router>
  );
}

export default App;
