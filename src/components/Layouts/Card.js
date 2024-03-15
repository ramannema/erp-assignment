const Card = (props) => {
  return (
    <div
      className={`w-full bg-white border border-gray-200 rounded-lg shadow p-5 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
