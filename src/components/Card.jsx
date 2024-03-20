import { NavLink } from "react-router-dom";

const Card = ({ item, addToCart }) => {
  return (
    <div className="md:w-4/12 xs:w-full px-4">
      <NavLink to={`/Product/${item.product_id}`}>
        <div className=" ease-in duration-300 p-3 my-4 border rounded-2xl hover:shadow-md">
          <img className="w-full" src={item.images.main} />
          <div className="font-[600] md:text-md xs:text-sm">
            <h3>{item.name}</h3>
            <h2 className="my-5 text-xl font-bold text-secondary">
              {item.price}
            </h2>
            <h2 className="my-5 text-lg text-gray-600 text-center">
              No Rating Yet
            </h2>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
