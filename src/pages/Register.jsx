import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlertMsg from "../components/AlertMsg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();
  const showToastSuccess = () => {
    toast.success(
      "Enhorabuena, te has registrado con éxito. Te estamos redirigiendo a la página del login",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };

  let timeout;

  function delayRedirection() {
    timeout = setTimeout(redirect, 4000);
  }

  const redirect = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, email, password].includes("")) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }
    setAlert({});

    try {
      await axios.post("/users/register", {
        name,
        email,
        password,
      });
      showToastSuccess();
      delayRedirection();
    } catch {
      setAlert({ msg: "Esa dirección de correo ya existe", error: true });
    }
  };

  const { msg } = alert;

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-2xl text-center mb-4">Regístrate</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          {msg && <AlertMsg alert={alert} />}
          <input
            type="text"
            placeholder="Tu nombre y apellidos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Tu dir. de correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Registarse</button>
          <div className="text-center py-4 text-slate-700 underline">
            <Link to="/login">Ya tengo una cuenta</Link>
          </div>{" "}
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Register;
