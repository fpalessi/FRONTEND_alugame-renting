const Img = ({ src, ...rest }) => {
  src =
    src && src.includes("https://")
      ? src
      : "https://alugame-api.onrender.com/" + src;
  return <img {...rest} src={src} alt={""} />;
};

export default Img;
