import Card from "../components/Card";
import { productsList } from "../services/";
const Home = (props) => {
  return (
    <div className="flex flex-wrap">
      {productsList.map((item) => (
        <Card key={item.product_id} item={item} addToCart={props.addToCart} />
      ))}
    </div>
  );
};

export default Home;
