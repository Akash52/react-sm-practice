import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Navbar />
        </Router>
    );
};

export default App;
