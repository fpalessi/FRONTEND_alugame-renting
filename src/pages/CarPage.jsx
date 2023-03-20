import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CarRentalForm from "../components/CarRentalForm";
import Spinner from "../components/Spinner";
import CarLocation from "../components/CarLocation";
import ShowImages from "../components/ShowImages";

const CarPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!id) return;
    // endpoint returns info bout an specific car
    setLoading(true);
    axios
      .get(`/cars/${id}`)
      .then((response) => setCar(response.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="lg:grid gap-4 grid-cols-2 mt-6 bg-slate-100 -mx-6 px-8 py-12">
      {loading && (
        <div className="flex justify-center my-10">
          <Spinner />
        </div>
      )}
      <div className="lg:ml-8">
        {" "}
        <h1 className="text-2xl mb-2">
          {car?.brand} {car?.model}
        </h1>
        <CarLocation>{car?.location}</CarLocation>
        <ShowImages car={car} />
      </div>
      <div className="mt-6 grid lg:mt-16">
        <div className="xl:grid grid-cols-2 bg-gray-200 p-4 rounded-2xl">
          <div className="my-2 flex font-bold gap-2">
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
            {car?.price}€/día
          </div>
          <div className="my-2 flex font-bold gap-2">
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
            {car?.seats}
          </div>
          <div className="my-2 flex font-bold gap-2">
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
            {car?.doors}
          </div>
          <div className="my-2 flex font-bold gap-2">
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
            Transmisión {car?.transmission}
          </div>
          <div className="my-2 flex font-bold gap-2">
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
            {car?.aircon}
          </div>
          <div className="my-2 flex font-bold gap-2">
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
            {car?.trunk}
          </div>
          <div className="my-2 flex font-bold gap-2">
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
            {car?.consumption} consumo
          </div>
          <div className="my-2 flex font-bold gap-2">
            <svg
              className="w-12 md:w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18.5C12.5523 18.5 13 18.0523 13 17.5L13 10.5C13 9.94772 12.5523 9.5 12 9.5C11.4477 9.5 11 9.94772 11 10.5L11 17.5C11 18.0523 11.4477 18.5 12 18.5Z"
                fill="#000000"
              />
              <path
                d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                fill="#000000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                fill="#000000"
              />
            </svg>
            {car?.description}
          </div>{" "}
        </div>{" "}
        <CarRentalForm car={car} />
      </div>{" "}
    </div>
  );
};

export default CarPage;
