
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavbarComponent } from './components/NavigationMenu/NavbarComponent';
import { Home } from './pages/HomePage/Home';



function App() {
    return (
        <Router>

            <NavbarComponent />

            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>


        </ Router>
    );
}

export default App;
