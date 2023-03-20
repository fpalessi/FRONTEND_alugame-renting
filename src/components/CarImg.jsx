import Img from "./Img";

const CarImg = ({ car, index = 0, className = null }) => {
  if (!car.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }

  return <Img className={className} src={car.photos[index]} alt="" />;
};

export default CarImg;
