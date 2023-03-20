import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center max-w-lg mx-auto my-20">
      <span>😪</span>
      <h2 className="text-red-600">404 - Page not found </h2>
      <span className="font-semibold">Por aquí no hay nada</span>
      <button
        onClick={() => navigate("/")}
        className="primary max-w-sm mt-2 font-semibold"
      >
        Volver al Home
      </button>{" "}
    </div>
  );
};

export default NotFound;
