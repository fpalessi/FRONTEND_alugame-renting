import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AlertMsg from "../components/AlertMsg";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const { setCurrentUser, currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/acc" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({ msg: "Rellena todos los campos", error: true });
      return;
    }
    setAlert({});

    try {
      const response = await axios.post("/users/login", { email, password });
      // same as const { data } = await axios.post(...)
      setCurrentUser(response.data);
      console.log(response.data);
      navigate("/");
    } catch {
      setAlert({
        msg: "Correo o contraseña incorrectos",
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-2xl text-center mb-4">Inicia sesión</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          {msg && <AlertMsg alert={alert} />}
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Iniciar sesión</button>
          <div className="text-center py-4 text-slate-700 underline">
            <Link to="/register">Crea una cuenta aquí</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
