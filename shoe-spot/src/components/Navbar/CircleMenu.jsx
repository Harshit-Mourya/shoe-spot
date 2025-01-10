import "./Navbar.css";

import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function CircleMenu() {
  const [showOptions, setShowOptions] = useState(false); // State to control visibility of options
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  // Create a reference for the user-box (button) and the options dropdown
  const userBoxRef = useRef(null);
  const optionsRef = useRef(null);

  // Function to handle click outside the user box or options
  const handleClickOutside = (event) => {
    // If the click is outside the user-box and the options dropdown, close the options
    if (
      userBoxRef.current &&
      !userBoxRef.current.contains(event.target) &&
      optionsRef.current &&
      !optionsRef.current.contains(event.target)
    ) {
      setShowOptions(false); // Close the options dropdown
    }
  };

  // Set up the event listener when the component mounts and clean it up on unmount
  useEffect(() => {
    // setShowOptions(false);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogin = () => {
    setShowOptions(false);
    navigate("/login"); // Redirect to login page
  };

  const handleSignup = () => {
    setShowOptions(false);

    navigate("/signup"); // Redirect to signup page
  };

  const handleLogout = () => {
    setShowOptions(false);

    logout(); // Call the logout function from context
    navigate("/");
  };

  return (
    <div>
      {/* Circle Button */}
      <div
        ref={userBoxRef}
        className="user-box"
        onClick={() => setShowOptions(!showOptions)} // Toggle the options visibility on click
      >
        <span>
          {user ? (
            <i className="fa-solid fa-user"></i>
          ) : (
            <i className="fa-regular fa-user"></i>
          )}
        </span>{" "}
        {/* Icon for the circle */}
      </div>

      {/* Options Dropdown */}
      {showOptions && (
        <div className="user-box-options" ref={optionsRef}>
          <ul className="user-option-list fs-5">
            {user ? (
              // Show when the user is logged in
              <>
                <li>Hi {user.name}</li>
                <li onClick={handleLogout}>Logout</li>
              </>
            ) : (
              // Show when the user is not logged in
              <>
                <li onClick={handleLogin}>Login</li>
                <li onClick={handleSignup}>Signup</li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
