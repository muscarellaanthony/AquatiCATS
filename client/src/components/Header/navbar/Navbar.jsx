import './navbar.scss'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; 
const Navbar = () => {
    return (
        <div className="navbar">
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
