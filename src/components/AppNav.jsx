import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/Cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/Products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/Wishlist">Wishlist</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppNav;
