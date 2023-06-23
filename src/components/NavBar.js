import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return <>
        <nav className="NavBar">
            {/* use end prop because otherwise links stay active when they are subsets of other links */}
            <NavLink end to="/">HomePage</NavLink>
            <NavLink end to="/apartments">ApartmentsList</NavLink>
            <NavLink to="/apartments/create">CreateApartment</NavLink>
            <NavLink to="/apartments/create2">CreateApartmentNotControlled</NavLink>
        </nav>
    </>
}

export default NavBar;