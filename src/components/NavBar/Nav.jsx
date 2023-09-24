import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <section>
      <div className="flex justify-between py-7 px-10 shadow-md">
        <div className="text-xl font-bold">
          <h1>GamerMart</h1>
        </div>
        <nav>
          <ul className="flex gap-5 text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
