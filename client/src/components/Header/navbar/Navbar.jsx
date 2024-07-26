import './navbar.scss'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Sidebar from './Sidebar/Sidebar';
const Navbar = () => {
     const linkClass = ({ isActive }) => isActive ? 'mb-5 text-indigo-950 pl-4 border-l-4 border-yellow-500' : 'mb-5 text-indigo-950 pl-4 hover:border-l-4 border-yellow-500'
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, }}
                    transition={{ duration: 0.5 }}></motion.span>
                <span>AQUATICATS</span>
                <div className="social">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Meets">Meet Schedule</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Media">Media</NavLink>
                    <NavLink to="/Join">Join</NavLink> 
                    </div>
            </div>

        </div>
    )
};

export default Navbar;
