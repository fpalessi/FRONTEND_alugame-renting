import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Index = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/cars")
      .then((response) => setCars(response.data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (sort === "Ascendente") {
      setCars((prev) => [...prev].sort((a, b) => a.price - b.price));
      setFilteredCars((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setCars((prev) => [...prev].sort((a, b) => b.price - a.price));
      setFilteredCars((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (queryParams) => {
    let searchResults = cars.filter((car) => {
      if (
        car.brand
          .toString()
          .toLowerCase()
          .includes(queryParams.toLowerCase()) ||
        car.model.toString().toLowerCase().includes(queryParams.toLowerCase())
      ) {
        return car;
      }
    });
    setFilteredCars(searchResults);
  };

  return (
    <>
      {" "}
      <div className="flex flex-col border-y md:flex-row justify-between mt-4">
        <input
          className="text-sm p-2.5 flex-1 mb-2"
          placeholder="Busca por marca..."
          value={search}
          onChange={handleChange}
        />{" "}
        <select
          className="text-gray-600 cursor-pointer flex-4"
          onChange={(e) => setSort(e.target.value)}
        >
          {" "}
          <option value="">Ordenar por precio</option>
          <option value="Ascendente">Precio ascendente</option>
          <option value="Descendente">Precio descendente</option>
        </select>
      </div>
      {loading && (
        <div className="flex justify-center my-20">
          <Spinner />
        </div>
      )}
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredCars.length > 0
          ? filteredCars.map((filteredCar) => (
              <Link to={"/car/" + filteredCar._id} key={filteredCar._id}>
                <div className="bg-gray-500 mb-2 rounded-2xl flex">
                  <img
                    src={"http://localhost:4000/" + filteredCar.photos[0]}
                    className="rounded-3xl object-contain "
                    alt=""
                  />
                </div>

                <div>
                  {" "}
                  <h2 className="text-xl">
                    {filteredCar.brand} {filteredCar.model}{" "}
                  </h2>
                  <h2 className="text-md text-slate-600">
                    {filteredCar.location}
                  </h2>{" "}
                </div>
                <div>
                  <span className="text-sm font-bold">
                    {filteredCar.price}€ por hora
                  </span>{" "}
                </div>
              </Link>
            ))
          : cars.map((car) => (
              <Link to={"/car/" + car._id} key={car._id}>
                <div className="bg-gray-500 mb-2 rounded-2xl flex">
                  <img
                    src={"http://localhost:4000/" + car.photos[0]}
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
                <div className="">
                  <span className="text-sm font-bold">
                    {car.price}€ por hora
                  </span>{" "}
                </div>
              </Link>
            ))}
      </div>
    </>
  );
};

export default Index;
