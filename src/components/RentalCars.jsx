import React from "react";
import { Link } from "react-router-dom";

const RentalCars = ({ cars }) => {
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {cars.length > 0 &&
        cars.map((car) => (
          <Link to={"/car/" + car._id} key={car._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              <img
                src={"https://alugame-api.onrender.com/" + car.photos[0]}
                className="rounded-3xl object-contain "
                alt=""
              />
            </div>
            <div>
              {" "}
              <h2 className="text-xl">
                {car.brand} {car.model}{" "}
              </h2>
              <h2 className="text-md text-slate-600">{car.location}</h2>{" "}
            </div>
            <div>
              <span className="text-sm font-bold">{car.price}€ por hora</span>{" "}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RentalCars;
