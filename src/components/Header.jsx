import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    await axios.post("/users/logout");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <header className="flex justify-between gap-4">
      {" "}
      <Link to="/" href="" className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-steering-wheel mt-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M12 14l0 7"></path>
          <path d="M10 12l-6.75 -2"></path>
          <path d="M14 12l6.75 -2"></path>
        </svg>
        <span className="font-bold text-xl">alugame</span>
      </Link>
      <div className="hidden md:flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-400 hidden">
        {currentUser ? (
          <button className="bg-transparent" onClick={logOut}>
            {" "}
            Cerrar sesión{" "}
          </button>
        ) : (
          <Link to="/register"> Empieza ya, regístrate ahora</Link>
        )}
      </div>
      <Link
        to={currentUser ? "/acc" : "/login"}
        className="flex items-center gap-1 border border-gray-300 rounded-full py-2 px-4 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-adjustments-horizontal"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 6l8 0"></path>
          <path d="M16 6l4 0"></path>
          <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 12l2 0"></path>
          <path d="M10 12l10 0"></path>
          <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 18l11 0"></path>
          <path d="M19 18l1 0"></path>
        </svg>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.7"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        {!!currentUser && <div>{currentUser.name}</div>}
      </Link>
    </header>
  );
};

export default Header;
