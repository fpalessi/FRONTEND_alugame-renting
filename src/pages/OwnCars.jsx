import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccNavigation from "../components/AccNavigation";
import Spinner from "../components/Spinner";

const OwnCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/cars/user-cars")
      .then(({ data }) => setCars(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <AccNavigation />
      <div className="text-center">
        <Link
          to="/acc/cars/new"
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full mr-2"
        >
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
              d="M12 6v12m6-6H6"
            />
          </svg>
          Añadir coche
        </Link>
        {cars.length > 0 && (
          <div className="hidden md:inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full">
            <svg
              fill="#ffffff"
              className="w-6 h-6"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="st0"
                d="M12 25l3 3 15-15-3-3-15 15zM11 26l3 3-4 1z"
              />
            </svg>
            Click en el coche para editar
          </div>
        )}
      </div>
      <div className="mt-4">
        {loading && (
          <div className="flex justify-center my-10">
            <Spinner />
          </div>
        )}
        {cars?.map((car) => (
          <Link
            className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl my-4"
            key={car._id}
            to={"/acc/cars/" + car._id}
          >
            <div className="flex w-32 h-32 bg-gray-300">
              <img
                src={"https://alugame-api.onrender.com/" + car.photos[0]}
                className="object-cover"
                alt=""
              />
            </div>
            <div className="grow-0 shrink">
              <h2 className="text-2xl text-slate-800">
                {car.brand}, {car.model}{" "}
              </h2>
              <h2 className="text-xl text-slate-700">{car.location}</h2>
              <div className="flex gap-2 text-xl mt-4 text-slate-700 bg-primary p-1 rounded-2xl">
                <div className="mt-1 -mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-white">{car.price}€/día</span>
              </div>
            </div>
          </Link>
        ))}
        {/* {cars.length > 0 &&
          cars.map((car) => (
            <Link
              className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl my-4"
              key={car._id}
              to={"/acc/cars/" + car._id}
            >
              <div className="flex w-32 h-32 bg-gray-300">
                <img
                  src={"https://alugame-api.onrender.com/" + car.photos[0]}
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-2xl text-slate-800">
                  {car.brand}, {car.model}{" "}
                </h2>
                <h2 className="text-xl text-slate-700">{car.location}</h2>
                <div className="flex gap-2 text-xl mt-4 text-slate-700 bg-primary p-1 rounded-2xl">
                  <div className="mt-1 -mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-white">{car.price}€/día</span>
                </div>
              </div>
            </Link>
          ))} */}
      </div>
    </div>
  );
};

export default OwnCars;
