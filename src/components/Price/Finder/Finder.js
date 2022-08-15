import "./finder.css";
import { ImSearch } from "react-icons/im";

export default function Finder({ value, finder }) {
  return (
    <div className="search-box">
      <input
        className="search-input"
        name="finder"
        placeholder="Пошук..."
        value={value}
        onChange={finder}
        type="text"
      />
      <a href="#" className="search-btn">
        <ImSearch />
      </a>
    </div>
  );
}
