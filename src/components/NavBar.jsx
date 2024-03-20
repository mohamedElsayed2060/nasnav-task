import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import CartDrawer from "./CartDrawer";

const NavBar = ({
  openLeftDrawer,
  openAndCloseLeftBtnClicked,
  openRightDraw,
  openAndCloseRightBtnClicked,
  totalQuantity,
  totalPrice,
  cart,
}) => {
  return (
    <div className="ease-in duration-300 w-full bg-secondary">
      <div className="md:mx-28 xs:mx-5 ease-in duration-300 flex flex-wrap text-white py-5 items-center">
        <div className=" md:w-4/12 xs:w-6/12 flex items-center">
          <div className="xs:w-2/12">
            <button
              onClick={() => {
                openAndCloseLeftBtnClicked(true);
              }}
            >
              {" "}
              <svg
                style={{ fill: "#FFFFFF" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18.219"
                viewBox="0 0 24 18.219"
              >
                <g transform="translate(-2557.581 -332.903)">
                  <path d="M2580.248,335.57h-21.334a1.333,1.333,0,0,1,0-2.667h21.334a1.333,1.333,0,0,1,0,2.667Z"></path>
                  <path d="M2576.248,343.346h-17.334a1.334,1.334,0,0,1,0-2.667h17.334a1.334,1.334,0,0,1,0,2.667Z"></path>
                  <path d="M2580.248,351.122h-21.334a1.333,1.333,0,0,1,0-2.666h21.334a1.333,1.333,0,0,1,0,2.666Z"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="xs:w-8/12">
            <NavLink to="/">
              <img
                src="https://www.yeshtery.com/files/69/brand-logo-yellow.svg"
                alt=""
              />
            </NavLink>
          </div>
        </div>
        <div className="md:w-8/12 xs:w-6/12 flex justify-end ">
          <div
            className="relative cursor-pointer"
            onClick={() => {
              openAndCloseRightBtnClicked(true);
            }}
          >
            <svg
              className="svg-secondary-color"
              xmlns="http://www.w3.org/2000/svg"
              width="29.903"
              height="24"
              viewBox="0 0 29.903 24"
            >
              <path
                d="M3438.544,406.339a1.179,1.179,0,0,0-.957-.491h-5.335l-7.514-9.393-.005-.006-.048-.054-.035-.037a.406.406,0,0,0-.037-.034c-.018-.017-.035-.033-.054-.048l-.006-.005-.025-.018a.686.686,0,0,0-.065-.047l-.038-.023c-.02-.012-.04-.025-.061-.036l-.049-.023c-.018-.008-.036-.017-.054-.024l-.059-.022-.047-.016-.065-.016-.046-.011-.064-.01-.049-.007c-.02,0-.04,0-.06,0l-.055,0-.054,0c-.021,0-.041,0-.061,0l-.049.007-.065.01-.045.011-.065.016-.047.016-.059.022c-.018.007-.036.016-.054.024l-.049.023c-.021.011-.041.024-.061.036l-.038.023c-.023.015-.044.031-.066.047l-.024.018-.006.005c-.019.015-.037.032-.055.048s-.025.022-.036.034-.023.025-.035.038-.033.035-.048.053l0,.006-7.514,9.393h-5.335a1.182,1.182,0,0,0-1.12,1.554l3.935,11.8a1.181,1.181,0,0,0,1.12.807h19.672a1.181,1.181,0,0,0,1.12-.807l3.935-11.8A1.179,1.179,0,0,0,3438.544,406.339Zm-14.728-7.257,5.413,6.766H3418.4Zm8.986,18.57H3414.83l-3.147-9.443h24.266Z"
                transform="translate(-3408.865 -396.013)"
              ></path>
            </svg>
            <div className="absolute w-[17px] h-[17px] rounded-full bg-white -top-2 -right-2 text-black text-[12px] text-center font-[600]">
              {totalQuantity}
            </div>
          </div>
        </div>
      </div>

      <Drawer
        openLeftDrawer={openLeftDrawer}
        openAndCloseLeftBtnClicked={openAndCloseLeftBtnClicked}
      />
      <CartDrawer
        openRightDraw={openRightDraw}
        openAndCloseRightBtnClicked={openAndCloseRightBtnClicked}
        totalPrice={totalPrice}
        cart={cart}
      />
    </div>
  );
};

export default NavBar;
