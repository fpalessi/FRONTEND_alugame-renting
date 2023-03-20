import axios from "axios";
import React, { useEffect, useState } from "react";
import AccNavigation from "../components/AccNavigation";
import CarImg from "../components/CarImg";
import { differenceInCalendarDays, format } from "date-fns";
import Modal from "react-modal";
import Spinner from "../components/Spinner";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "2rem",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const RentedCars = () => {
  const [rentals, setRentals] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/rentals")
      .then((response) => setRentals(response.data))
      .finally(() => setLoading(false));
    console.log(rentals);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <AccNavigation />
      <div>
        {loading && (
          <div className="flex justify-center my-10 ">
            <Spinner />
          </div>
        )}
        {rentals.length > 0 &&
          rentals?.map((rental) => (
            <div
              to={`/acc/rentals/${rental._id}`}
              key={rental._id}
              // className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden my-4 cursor-pointer"
              className="md:flex bg-gray-200 my-4 rounded-2xl gap-2 cursor-pointer"
              onClick={openModal}
            >
              {/* Modal */}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="grid">
                  <div>
                    {" "}
                    <div className="font-xl my-4 flex font-bold gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 10"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#191919"
                          fillRule="evenodd"
                          d="M10.067.001h7.024l.3.404 1.76 2.365H22v4.45l-.635.249-1.821.714c-.299 1.029-1.22 1.816-2.368 1.816-1.043 0-1.898-.649-2.27-1.538H6.505c-.372.89-1.227 1.538-2.27 1.538S2.338 9.35 1.965 8.46H0V5.415l.41-.3 2.94-2.152.264-.193h2.923L9.795.215 10.067 0zm-.29 2.769h2.846l.244-.77h-2.11l-.98.769zM14.968 2l-.245.769h1.935L16.087 2h-1.12zM4.05 4.93c.06-.005.123-.007.185-.007 1.043 0 1.898.648 2.27 1.538h8.402c.372-.89 1.227-1.538 2.27-1.538.912 0 1.68.495 2.107 1.214L20 5.856V4.77H4.268l-.218.16zm.185 1.993c-.218 0-.47.198-.47.538s.252.538.47.538c.219 0 .471-.199.471-.538 0-.34-.252-.538-.47-.538zm12.942 0c-.218 0-.47.198-.47.538s.252.538.47.538c.218 0 .47-.199.47-.538 0-.34-.252-.538-.47-.538z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {rental.car.brand}, {rental.car.model}
                    </div>
                    <div className="my-4 flex font-bold gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {rental.car.price}€/día
                    </div>
                    <div className="my-4 flex font-bold gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#191919"
                          fillRule="evenodd"
                          d="M5.94 19.242L4 18.758c.037-.148.107-.39.209-.698.17-.51.375-1.022.617-1.506C5.604 14.995 6.6 14 7.97 14h8c1.37 0 2.366.995 3.145 2.553.242.484.446.995.616 1.506.103.307.172.55.21.698L18 19.242a8.269 8.269 0 00-.166-.55 9.593 9.593 0 00-.508-1.245C16.854 16.505 16.35 16 15.97 16h-8c-.38 0-.884.505-1.355 1.447a9.592 9.592 0 00-.509 1.244c-.085.255-.14.45-.166.552zM16.47 8.5c0 2.536-2.012 4.5-4.54 4.5-2.52 0-4.46-1.956-4.46-4.5 0-2.57 1.883-4.5 4.46-4.5 2.585 0 4.54 1.94 4.54 4.5zm-2 0c0-1.452-1.056-2.5-2.54-2.5-1.46 0-2.46 1.024-2.46 2.5 0 1.443 1.048 2.5 2.46 2.5 1.434 0 2.54-1.08 2.54-2.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {rental.car.seats}
                    </div>
                    <div className="my-4 flex font-bold gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#191919"
                          fillRule="evenodd"
                          d="M4 12v3.062c2.929.364 5.4 2.303 5.906 4.938H20v-8H4zm.618-2H20V4H7.618l-3 6zM2 10.764L6.382 2H22v20H8v-1c0-2.218-2.29-4-5-4H2v-6.236zM7 15v-2h3v2H7z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {rental.car.doors}
                    </div>
                    <div className="my-4 flex font-bold gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#191919"
                          fillRule="evenodd"
                          d="M11 13H8v5H6V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5zM8 4H6V2h2v2zm5 0h-2V2h2v2zm5 0h-2V2h2v2zm-5 18h-2v-2h2v2zm-5 0H6v-2h2v2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Transmisión {rental.car.transmission}
                    </div>
                    <div className="my-4 flex font-bold gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#191919"
                          fillRule="evenodd"
                          d="M8.744 15.222l-.958 3.58-1.932-.518.458-1.71-2.34 1.3L3 16.126l2.09-1.16-1.363-.366.517-1.932 3.36.9L10.425 12l-2.822-1.568-3.359.9L3.728 9.4l1.361-.365L3 7.875l.971-1.75 2.342 1.302-.458-1.71 1.932-.518.959 3.58 2.74 1.522V7.07L8.945 4.53l1.414-1.414 1.127 1.126V2h2v2.243l1.128-1.128 1.414 1.415-2.542 2.541v3.23l2.74-1.523.96-3.58 1.932.518-.458 1.71 2.34-1.3.971 1.748-2.089 1.16 1.362.366-.517 1.931-3.359-.9-2.823 1.57 2.825 1.569 3.357-.9.518 1.931-1.361.365 2.087 1.16-.97 1.748-2.342-1.3.459 1.712-1.932.517-.96-3.58-2.74-1.523v3.229l2.54 2.541-1.413 1.414-1.127-1.127V22h-2v-2.243l-1.128 1.127-1.414-1.414 2.542-2.541v-3.23l-2.742 1.523z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {rental.car.aircon}
                    </div>
                    <div className="my-4 flex font-bold gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#191919"
                          fillRule="evenodd"
                          d="M16 8H8v11h8V8zm2 0v11h2V8h-2zM6 8H4v11h2V8zm2-2V3h8v3h6v15H2V6h6zm2 0h4V5h-4v1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {rental.car.trunk}
                    </div>
                    <div className="my-4 flex font-bold gap-2">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 5C4 4.44772 4.44772 4 5 4H12C12.5523 4 13 4.44772 13 5V21H4V5Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 11.5H18V19C18 20.1046 18.8954 21 20 21V21C21.1046 21 22 20.1046 22 19V9M17.5 2L20.5 4.66667M20.5 4.66667L22 6V9M20.5 4.66667V9H22"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 21L2 21"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 8L7 8"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {rental.car.consumption} consumo
                    </div>
                    <div className="my-4 flex font-bold gap-2">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 7.01001V7.00002M12 17L12 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#000000"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {rental.car.description}
                    </div>{" "}
                  </div>{" "}
                  <button
                    className="bg-primary p-2 rounded-xl text-white font-semibold cursor-not-allowed"
                    onClick={closeModal}
                  >
                    Presiona ESC para volver
                  </button>
                </div>{" "}
              </Modal>
              <div className="mt-3 w-full md:w-48">
                <CarImg car={rental.car} />
              </div>
              <div className="mx-2 my-4 md:py-3 pr-3 grow">
                {" "}
                <h2 className="text-xl">
                  {rental.car.brand} {rental.car.model}
                </h2>
                <div className="text-xl">
                  <div className="flex gap-1 text-slate-700">
                    {differenceInCalendarDays(
                      new Date(rental.checkOut),
                      new Date(rental.checkIn)
                    )}{" "}
                    día(s) | Desde{" "}
                    {format(new Date(rental.checkIn), "yyyy-MM-dd")} hasta{" "}
                    {format(new Date(rental.checkOut), "yyyy-MM-dd")}
                  </div>
                </div>{" "}
                <div className="flex gap-1 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                  <span className="text-xl text-white bg-primary p-1.5 rounded-2xl mb-2">
                    Coste total: {rental.price}€
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RentedCars;
