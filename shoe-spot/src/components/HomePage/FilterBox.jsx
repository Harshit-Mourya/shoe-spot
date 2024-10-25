import "./Home.css";

export default function FilterBox({ isFilterOn }) {
  return (
    <div
      className="FilterBox"
      style={{ display: isFilterOn ? "block" : "none" }}
    >
      <h1>FilterBox</h1>
    </div>
  );
}
