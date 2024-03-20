import { NavLink } from "react-router-dom";

const CartDrawer = ({
  openRightDraw,
  openAndCloseRightBtnClicked,
  totalPrice,
  cart,
}) => {
  return (
    <div
      className={`fixed ${
        openRightDraw ? "" : "hidden"
      }  bg-black/50 top-0 left-0 bottom-0 right-0 z-50 ease-in duration-300`}
    >
      <div
        className={`absolute bg-white top-0  ${
          openRightDraw ? "right-[0]" : "-right-[0]"
        }  bottom-0 md:w-[480px] xs:w-[300px] z-10 overflow-y-auto p-5 ease-in duration-300`}
      >
        <div className="flex flex-wrap mb-10 items-center">
          <div
            className="xs:w-full flex justify-end cursor-pointer"
            onClick={() => {
              openAndCloseRightBtnClicked(false);
            }}
          >
            <img
              className="w-[25px]"
              src="https://www.yeshtery.com/yeshtery/images/close.svg"
              alt=""
            />
          </div>
          <div className="font-bold text-3xl text-center w-full text-secondary my-5 ">
            My Cart
          </div>

          <div className="font-bold text-xl w-full  my-2 ">Cart Summary</div>
          {cart.length ? (
            <>
              {cart.map((item) => (
                <NavLink
                  onClick={() => {
                    openAndCloseRightBtnClicked(false);
                  }}
                  to={`/product/${item.product_id}`}
                  key={item.product_id}
                  className="block ease-in duration-300 w-full my-5 p-3 border hover:shadow rounded-xl flex flex-wrap"
                >
                  <div className="md:w-4/12 xs:w-full">
                    <img src={item.images.main} alt="" />
                  </div>
                  <div className="md:w-8/12 xs:w-full font-bold">
                    <div className="my-1">{item.name}</div>
                    <div className="my-1 text-xs">
                      quantity: {item.quantity}
                    </div>
                    <div className="my-2 text-secondary text-xl">
                      {new Intl.NumberFormat("en-US", {
                        currency: "EGP",
                        style: "currency",
                      }).format(item.total_price)}
                    </div>
                    <div className="w-full text-end">
                      <button className="bg-primary px-2 py-1 rounded-full text-xs">
                        Remove
                      </button>
                    </div>
                  </div>
                </NavLink>
              ))}
              <div className="w-full text-center font-bold text-xl">
                Total:{" "}
                {new Intl.NumberFormat("en-US", {
                  currency: "EGP",
                  style: "currency",
                }).format(totalPrice)}
              </div>

              <div className="w-full flex flex-wrap mt-8 justify-between">
                <NavLink
                  onClick={() => {
                    openAndCloseRightBtnClicked(false);
                  }}
                  to="/cart"
                  className="bg-primary p-2 rounded-full md:w-[47%] font-bold text-center"
                >
                  Review Cart
                </NavLink>

                <NavLink
                  onClick={() => {
                    openAndCloseRightBtnClicked(false);
                  }}
                  to="#"
                  className="md:mt-0 xs:mt-3 bg-secondary p-2 rounded-full md:w-[47%] font-bold text-white text-center"
                >
                  Complete checkout
                </NavLink>
              </div>
            </>
          ) : (
            <div className="text-center w-full mt-10 font-bold">
              You have no items yet..
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CartDrawer;
