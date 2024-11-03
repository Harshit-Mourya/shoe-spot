import "./Navbar.css";

export default function NavItemOptions({ shoe, handleFilterClick }) {
  return (
    <>
      <a
        className="dropdown-item"
        onClick={() => handleFilterClick(`${shoe.split(" ")[0]}`)}
      >
        {shoe}
      </a>
    </>
  );
}
