import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Drawer = ({ openLeftDrawer, openAndCloseLeftBtnClicked }) => {
  const navLinks = [
    {
      text: "Men",
      linkTo: "/",
    },
    {
      text: "Women",
      linkTo: "/",
    },
    {
      text: "Kids",
      linkTo: "/",
    },
    {
      text: "Sports & fitness",
      linkTo: "/",
    },
    {
      text: "Electronics",
      linkTo: "/",
    },
  ];
  return (
    <div
      className={`fixed ${
        openLeftDrawer ? "" : "hidden"
      }  bg-black/50 top-0 left-0 bottom-0 right-0 z-50 ease-in duration-300`}
    >
      <div
        className={`absolute bg-white top-0  ${
          openLeftDrawer ? "left-[0]" : "-left-[120%]"
        }  bottom-0 md:w-[480px] xs:w-[300px] z-10 overflow-y-auto p-5 ease-in duration-300`}
      >
        <div className="flex mb-10 items-center">
          <div className="xs:w-7/12 ">
            <NavLink to="/">
              <img
                className="w-full"
                src="https://www.yeshtery.com/yeshtery/images/brand_logo_black.svg"
                alt=""
              />
            </NavLink>
          </div>

          <div
            className="xs:w-5/12 flex justify-end cursor-pointer"
            onClick={() => {
              openAndCloseLeftBtnClicked(false);
            }}
          >
            <img
              className="w-[25px]"
              src="https://www.yeshtery.com/yeshtery/images/close.svg"
              alt=""
            />
          </div>
        </div>
        {navLinks.map((item) => (
          <NavLink
            to={item.linkTo}
            key={item.text}
            className="block font-bold border-t py-4"
            onClick={() => {
              openAndCloseLeftBtnClicked(false);
            }}
          >
            {item.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Drawer;
