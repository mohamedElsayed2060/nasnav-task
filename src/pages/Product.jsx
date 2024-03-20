import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsList } from "../services/";

const Product = ({ state, addToCart }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    const checkIfExistInCart = state.cart.find(
      (pro) => pro.product_id === Number(params.id)
    );
    if (checkIfExistInCart) {
      setCurrentProduct(
        state.cart.find((pro) => pro.product_id === Number(params.id))
      );
    } else {
      setCurrentProduct(
        productsList.find((pro) => pro.product_id === Number(params.id))
      );
    }
  }, [params]);
  return (
    <div className="flex flex-wrap justify-between items-center mt-8">
      <div className="md:w-[46%] xs:w-full  p-2">
        <div className="w-full">
          <img src={currentProduct?.images?.main} alt="" />
        </div>
        <div className="flex overflow-heddin items-center">
          <button className="me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.589"
              height="24"
              viewBox="0 0 15.589 24"
              className=""
            >
              <path
                d="M7373.221,1274.066a.785.785,0,0,0,.491-1.4l-13.252-10.6,13.252-10.6a.785.785,0,1,0-.981-1.226l-14.018,11.215a.784.784,0,0,0,0,1.226l14.018,11.215A.781.781,0,0,0,7373.221,1274.066Z"
                transform="translate(-7358.418 -1250.066)"
                // style="fill: rgb(60, 60, 59);"
              ></path>
            </svg>
          </button>
          {currentProduct?.images?.subMain.map((item, index) => (
            <div className="" key={index}>
              <img src={item.thumb} alt="" />
            </div>
          ))}
          <button className="ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.589"
              height="24"
              viewBox="0 0 15.589 24"
              className="ProductDetail_arrowRight__JyWvo"
            >
              <path
                d="M7911.615,1250.066a.785.785,0,0,0-.491,1.4l13.252,10.6-13.252,10.6a.785.785,0,1,0,.981,1.226l14.018-11.215a.784.784,0,0,0,0-1.226l-14.018-11.215A.787.787,0,0,0,7911.615,1250.066Z"
                transform="translate(-7910.829 -1250.066)"
                // style="fill: rgb(60, 60, 59);"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="md:w-[50%] xs:w-full  p-2">
        <div className="font-bold text-xl">{currentProduct?.name}</div>
        <div className="font-bold text-xl my-7 text-secondary">
          {new Intl.NumberFormat("en-US", {
            currency: "EGP",
            style: "currency",
          }).format(currentProduct?.total_price)}
        </div>

        <div className="font-500 text-xl text-gray-400 ">
          Quantity: {currentProduct?.quantity}
          <div className="border rounded-lg p-3 w-[150px] flex justify-between mt-2">
            <button
              className="w-7 h-7 bg-gray-600 text-white text-xl rounded"
              onClick={() => {
                if (currentProduct.quantity <= 1) {
                  return;
                }
                setCurrentProduct({
                  ...currentProduct,
                  quantity: currentProduct.quantity - 1,
                });
              }}
            >
              -
            </button>
            <span className="text-black font-bold">
              {currentProduct?.quantity}
            </span>

            <button
              className="w-7 h-7 bg-secondary text-white text-xl rounded"
              onClick={() => {
                setCurrentProduct({
                  ...currentProduct,
                  quantity: currentProduct.quantity + 1,
                });
                addToCart(currentProduct);
              }}
            >
              +
            </button>
          </div>
          <div className="w-full mt-5">
            <button
              className="p-3 rounded w-[200px] bg-secondary w-full text-white font-bold"
              onClick={() => {
                addToCart(currentProduct);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
