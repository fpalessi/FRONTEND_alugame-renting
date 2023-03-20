import { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CarRentalForm = ({ car }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const showToastSuccess = () => {
    toast.success(
      "Enhorabuena, has reservado este coche con éxito. Te estamos redirigiendo a la página de tus alquileres",
      {
        position: "top-right",
        autoClose: 6000,
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
    timeout = setTimeout(redirect, 6000);
  }

  const redirect = () => {
    navigate("/acc/rentals");
  };

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
    }
  }, [currentUser]);

  let days = 0;
  if (checkIn && checkOut) {
    days = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  const rentCar = async (e) => {
    e.preventDefault();
    await axios.post("/rentals", {
      checkIn,
      checkOut,
      name,
      phone,
      car: car._id,
      price: days * car.price,
    });
    showToastSuccess();
    delayRedirection();
  };

  return (
    <form className="bg-white mt-2 shadow p-3 rounded-2xl" onSubmit={rentCar}>
      {days > 0 && (
        <div className="sm:text-sm text-center md:text-xl">
          Este coche tiene un coste de {car?.price}€ por día. Has elegido un
          total de {days} día(s), precio final:
          {days > 0 && <span className="font-bold"> {days * car.price} €</span>}
        </div>
      )}
      <div className="border rounded-2xl mt-2">
        <div className="py-3 px-4">
          <label htmlFor="check-in">Desde</label>
          <input
            type="date"
            id="check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />{" "}
          <label htmlFor="check-out">Hasta</label>
          <input
            type="date"
            id="check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <label htmlFor="name">Tu nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="phone">Tu número de teléfono</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>{" "}
        <ToastContainer />
      </div>
      <button className="primary mt-2 font-bold">Alquilar este coche</button>{" "}
    </form>
  );
};

export default CarRentalForm;
