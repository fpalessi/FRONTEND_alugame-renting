const AlertMsg = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? "from-red-300 to-red-400" : "from-green-400 to-green-600"
      } bg-gradient-to-br text-center p-2 uppercase text-white font-semibold text-md my-4`}
    >
      {alert.msg}
    </div>
  );
};

export default AlertMsg;
