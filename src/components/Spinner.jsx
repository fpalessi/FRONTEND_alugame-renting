import { SpinnerCircularFixed } from "spinners-react";
const Spinner = () => {
  return (
    <SpinnerCircularFixed
      size={50}
      thickness={100}
      speed={120}
      color="rgba(170, 150, 218, 1)"
      secondaryColor="silvergray"
    />
  );
};

export default Spinner;
