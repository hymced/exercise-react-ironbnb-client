import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return <>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/apartments">ApartmentsList</NavLink>
        <NavLink to="/apartments/create">CreateApartment</NavLink>
    </>
}

export default NavBar;