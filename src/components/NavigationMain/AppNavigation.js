import { NavLink } from "react-router-dom";

export default function AppNavigation() {
  return (
    <ul className="">
      <li>
        <NavLink to="/price">Весь Алкоголь</NavLink>
      </li>
    </ul>
  );
}
