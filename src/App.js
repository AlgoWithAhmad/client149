import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar'
import Footer from './components/footer/footer'
import Home from './Pages/Home/home'
import About from './Pages/aboutMe/about'
import Process from './Pages/process'
import Appointment from './Pages/Appointment/appointment'
import Reviews from './Pages/Reviews/reviews'
import Work from './Pages/work/work'
import Services from './Pages/Services/services'
import Booking from './components/Booking/booking'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element=<Home /> />
        <Route path="/about" element=<About /> />
        <Route path="/reviews" element=<Reviews /> />
        <Route path="/process" element=<Process /> />
        <Route path="/appointment" element=<Appointment /> />
        <Route path="/work" element=<Work /> />
        <Route path="/services" element=<Services /> />
        {/* <Route path="/booking" element={<Booking />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
