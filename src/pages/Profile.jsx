import axios from "axios";
import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import AccNavigation from "../components/AccNavigation";
import useAuth from "../hooks/useAuth";
import CarPage from "./OwnCars";

const Profile = () => {
  const { currentUser, setCurrentUser } = useAuth();

  const navigate = useNavigate();

  let { subpage } = useParams();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (subpage === undefined) {
    subpage = "profile";
  }

  const logOut = async () => {
    await axios.post("/users/logout");
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <div>
      <AccNavigation />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Sesión iniciada como{" "}
          <span className="font-semibold">{currentUser.name}</span> con e-mail:
          ({currentUser.email})<br />
          <button
            onClick={logOut}
            className="primary max-w-sm mt-2 font-semibold"
          >
            Cerrar sesión{" "}
          </button>{" "}
        </div>
      )}
      {subpage === "cars" && <CarPage />}
    </div>
  );
};

export default Profile;
