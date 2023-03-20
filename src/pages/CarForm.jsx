import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UploadImage from "../components/UploadImage";
import axios from "axios";
import AccNavigation from "../components/AccNavigation";
import {
  SEATS,
  DOORS,
  TRANSMISSION,
  TRUNK,
  AIRCON,
  CONSUMPTION,
  PROVINCES,
} from "../constants";

const CarForm = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [location, setLocation] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [seats, setSeats] = useState("");
  const [doors, setDoors] = useState("");
  const [transmission, setTransmission] = useState("");
  const [aircon, setAircon] = useState("");
  const [trunk, setTrunk] = useState("");
  const [consumption, setConsumption] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axios.get("/cars/" + id).then((response) => {
      // from the response we grab the data
      const { data } = response;
      setBrand(data.brand);
      setModel(data.model);
      setLocation(data.location);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setSeats(data.seats);
      setDoors(data.doors);
      setTransmission(data.transmission);
      setAircon(data.aircon);
      setTrunk(data.trunk);
      setConsumption(data.consumption);
      setPrice(data.price);
    });
  }, [id]);

  const addOrSaveCar = async (e) => {
    e.preventDefault();
    const carData = {
      brand,
      model,
      location,
      photos: addedPhotos,
      description,
      seats,
      doors,
      transmission,
      aircon,
      trunk,
      consumption,
      price,
    };

    if (id) {
      // we are saving the existent car if id exists
      await axios.put("/cars", { id, ...carData });
    } else {
      // we add a new car
      await axios.post("/cars", carData);
    }

    navigate("/acc/cars");
    setBrand("");
    setModel("");
    setLocation("");
    setAddedPhotos("");
    setDescription("");
    setSeats("");
    setDoors("");
    setTransmission("");
    setAircon("");
    setTrunk("");
    setConsumption("");
    setPrice("");
  };

  return (
    <form onSubmit={addOrSaveCar} className="mt-5">
      <AccNavigation />
      <div className="mb-2">
        {" "}
        <label className="text-gray-800 text-lg" htmlFor="brand">
          Marca
        </label>
        <input
          type="text"
          id="brand"
          placeholder="Por ejemplo: Ford, Renault, Citroën, ..."
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        {" "}
        <label className="text-gray-800 text-lg" htmlFor="model">
          Modelo
        </label>
        <input
          type="text"
          id="model"
          placeholder="Por ejemplo: Fiesta, Megane, C3, ..."
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="text-gray-800 text-lg" htmlFor="location">
          Provincia
        </label>
        <select
          id="location"
          className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        >
          <option value="">Lugar donde se encuentra</option>
          {PROVINCES.map((province) => (
            <option key={province.id}>{province.name}</option>
          ))}
        </select>
      </div>
      <UploadImage addedPhotos={addedPhotos} onChange={setAddedPhotos} />
      <div className="mb-2">
        {" "}
        <label className="text-gray-800 text-lg" htmlFor="description">
          Descripción
        </label>
        <textarea
          type="text"
          id="description"
          placeholder="Descripción del coche: antigüedad, kilometraje, color, etc."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="price" className="text-gray-800 text-lg">
          Precio por día (€)
        </label>
        <input
          type="number"
          className="ml-5"
          id="price"
          value={price}
          placeholder="Precio de alquilar el coche durante un día en euros"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <div>
          <div className="mb-2">
            {" "}
            <label className="text-gray-800 text-lg" htmlFor="seats">
              Plazas
            </label>{" "}
            <select
              id="seats"
              className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              required
            >
              <option value="">Elige entre 2, 4, 5, 7 o 9 plazas</option>
              {SEATS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            {" "}
            <label className="text-gray-800 text-lg" htmlFor="doors">
              {" "}
              Nº de puertas
            </label>{" "}
            <select
              id="doors"
              className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
              value={doors}
              onChange={(e) => setDoors(e.target.value)}
              required
            >
              <option value="">Elige entre 3, 5 o 7 puertas</option>
              {DOORS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            {" "}
            <label className="text-gray-800 text-lg" htmlFor="trunk">
              {" "}
              Capacidad del maletero
            </label>{" "}
            <select
              id="trunk"
              className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
              value={trunk}
              onChange={(e) => setTrunk(e.target.value)}
              required
            >
              <option value="">Elige entre 1, 2 o 3 maletas</option>
              {TRUNK.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            {" "}
            <label className="text-gray-800 text-lg" htmlFor="transmission">
              Transmisión
            </label>{" "}
            <select
              id="transmission"
              className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              required
            >
              <option value="">Elige entre manual o automático</option>
              {TRANSMISSION.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label className="text-gray-800 text-lg" htmlFor="aircon">
              {" "}
              Aire acondicionado
            </label>{" "}
            <select
              id="aircon"
              className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
              value={aircon}
              onChange={(e) => setAircon(e.target.value)}
              required
            >
              <option value="">Elige con o sin aire </option>
              {AIRCON.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            {" "}
            <label className="text-gray-800 text-lg" htmlFor="consumption">
              Consumo
            </label>{" "}
            <select
              id="consumption"
              className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              required
            >
              <option value="">Elige entre alto o bajo consumo</option>
              {CONSUMPTION.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button className="primary w-4 my-8 hover:bg-slate-300 hover:text-gray-700">
        Save
      </button>
    </form>
  );
};

export default CarForm;
