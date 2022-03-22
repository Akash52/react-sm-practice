import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserPagination from './Components/Users/UserPagination';
import Navbar from './Layout/Navbar';
import {
    About,
    NotFound,
    Profile,
    Home,
    IpInfo,
    TodoPage,
    Userpage,
    DeployPage,
} from './Pages';

const App: FC = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ipinfo" element={<IpInfo />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/todos" element={<TodoPage />} />
                <Route path="/users" element={<Userpage />} />
                <Route path="/deploy" element={<DeployPage />} />
                <Route path="/userPagination" element={<UserPagination />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
