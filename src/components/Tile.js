import Card from "./Layouts/Card";

const Tile = ({ title, value }) => {
  return (
    <Card>
      <p className="text-sm font-semibold pb-5 text-gray-700 uppercase">
        {title}
      </p>
      <p className="text-xl font-bold uppercase">{value}</p>
    </Card>
  );
};

export default Tile;
