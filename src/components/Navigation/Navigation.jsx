import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { IoHomeSharp } from "react-icons/io5"; 
import { TbMovie } from "react-icons/tb";
import css from './Navigation.module.css';


const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation=() =>{
  return (
    <nav className={css.navigator}>
      <ul className={css.container}>
        <li>
          <NavLink to="/" className={getLinkClass}>
            <IoHomeSharp />&nbsp;Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getLinkClass}>
           <TbMovie /> &nbsp;Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;