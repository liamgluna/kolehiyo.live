import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-base-300 btn btn-ghost text-xl" : "btn btn-ghost text-xl";

  return (
    <nav className="navbar-center bg-base-100 m-4">
      <NavLink className={linkClass} to="/">
        Home
      </NavLink>
      <NavLink className={linkClass} to="/about">
        About
      </NavLink>
      <NavLink className={linkClass} to="/explore">
        Explore
      </NavLink>
    </nav>
  );
};

export default Navbar;
