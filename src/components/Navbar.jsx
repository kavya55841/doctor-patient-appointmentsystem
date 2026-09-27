import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/profile")}>
        Profile
      </button>
    </nav>
  );
}

export default Navbar;