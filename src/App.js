import './App.css';
import NavBar from './NavBar/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ContactPage from './Pages/ContactPage/ContactPage';
import AppointmentPage from './Pages/AppointmentPage';
import HomePage from './Pages/HomePage/HomePage';
import {useState} from 'react';

function App() {
  const [contacts, setContacts] = useState([
    {
      name: "Kaori Kawakami",
      phone: "744-444-4444",
      email: "kk@gmail.com",
      id: 1
    },
    {
      name: "Michael Q",
      phone: "444-444-4444",
      email: "mq@gmail.com",
      id: 2
    },
    {
      name: "Michael Q",
      phone: "444-444-4444",
      email: "mq@gmail.com",
      id: 3
    },
    {
      name: "Michael Q",
      phone: "444-444-4444",
      email: "mq@gmail.com",
      id: 4
    }
  ])
  const [appointments, setAppointments] = useState([
    {
      name: "Lola",
      date: "05/15/23",
      time: "10:00 AM"
    }
  ])
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage
          contacts={contacts}
          appointments={appointments}
        />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/appointment" element={<AppointmentPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
