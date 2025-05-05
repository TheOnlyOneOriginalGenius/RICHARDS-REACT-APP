import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="mt-2">
      <NavLink to="/" end className={({ isActive }) => isActive ? "font-bold underline mr-4" : "mr-4"}>
        About Me
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? "font-bold underline mr-4" : "mr-4"}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold underline mr-4" : "mr-4"}>
        Contact
      </NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? "font-bold underline" : ""}>
        Resume
      </NavLink>
    </nav>
  );
}
