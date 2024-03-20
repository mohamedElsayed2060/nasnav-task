import { NavLink } from "react-router-dom";

const Cart = ({ state }) => {
  return (
    <div className=" mt-8">
      <div className="text-secondary font-bold text-2xl">My Cart </div>
      <div className="font-semibold text-lg mt-3">
        Items({state?.cart?.length}){" "}
      </div>
      <div className="flex flex-wrap mt-10 justify-between items-start">
        <div className="md:w-[69%] xs:w-full ">
          {state?.cart?.map((item) => (
            <NavLink
              key={item.product_id}
              to={`/product/${item.product_id}`}
              className="block border p-2 rounded-xl flex flex-wrap items-center mb-5 hover:shadow-md ease-in duration-300"
            >
              <div className="md:w-28 xs:w-full">
                <img src={item.images.main} alt="" />
              </div>
              <div className="font-bold">
                <div>{item.name}</div>
                <div className="text-lg font-bold my-2 text-secondary">
                  {new Intl.NumberFormat("en-US", {
                    currency: "EGP",
                    style: "currency",
                  }).format(item.total_price)}
                </div>
                <div>Quantity: {item.quantity}</div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="md:w-[29%] xs:w-full md:mt-0 xs:mt-5 border rounded-xl p-4 flex flex-wrap justify-between items-start">
          <div className="text-lg font-bold">Sub total</div>
          <div className="text-lg font-bold text-secondary">
            {new Intl.NumberFormat("en-US", {
              currency: "EGP",
              style: "currency",
            }).format(state.totalPrice)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
