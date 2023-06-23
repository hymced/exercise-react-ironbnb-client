import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return <>
        <div className="NavBar">
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/apartments">ApartmentsList</NavLink>
            <NavLink to="/apartments/create">CreateApartment</NavLink>
            <NavLink to="/apartments/create2">CreateApartmentNotControlled</NavLink>
        </div>
    </>
}

export default NavBar;