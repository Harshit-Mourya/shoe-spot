import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 goes back to the previous page in the history stack
  };
  return (
    <>
      <div
        className="BackBtn position-absolute top-0 start-0 m-3 "
        onClick={handleBack}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
    </>
  );
}
