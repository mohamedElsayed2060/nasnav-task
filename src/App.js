import { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Product from "./pages/Product";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      cart: [],
      totalQuantity: 0,
      openRightDrawer: false,
      openLeftDrawer: false,
    };
  }
  //  calculate total products price //

  sumTotal = (cart) => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.total_price;
    });

    this.setState({ totalPrice });
  };

  // calculate all products quantity //
  sumAllQuantity = (cart) => {
    let totalQuantity = 0;
    cart.forEach((product) => {
      totalQuantity += product.quantity;
    });

    this.setState({ totalQuantity });
  };

  openAndCloseLeftBtnClicked = (data) => {
    this.setState((state) => ({
      openLeftDrawer: !state.openLeftDrawer,
    }));
  };

  openAndCloseRightBtnClicked = (data) => {
    this.setState((state) => ({
      openRightDrawer: !state.openRightDrawer,
    }));
  };
  // add to cart //
  addToCart = (product) => {
    const isExist = this.state.cart.find(
      (element) => element.product_id === product.product_id
    );

    if (isExist) {
      isExist.quantity += 1;
      isExist.total_price += isExist.price;
      localStorage.setItem("carts", JSON.stringify(this.state));
      this.sumTotal(this.state.cart);
      this.sumAllQuantity(this.state.cart);
    } else {
      this.setState((state) => ({
        totalPrice: (state.totalPrice += product.total_price),
        cart: [...state.cart, product],
        totalQuantity: (state.totalQuantity += product.quantity),
      }));
      localStorage.setItem("carts", JSON.stringify(this.state));
    }
  };

  componentDidUpdate() {
    localStorage.setItem("carts", JSON.stringify(this.state));
  }

  componentDidMount() {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("carts"));
    if (cartFromLocalStorage) {
      this.setState(() => ({
        cart: cartFromLocalStorage.cart,
        totalPrice: cartFromLocalStorage.totalPrice,
        totalQuantity: cartFromLocalStorage.totalQuantity,
      }));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <header className="App-header">
          <NavBar
            openLeftDrawer={this.state.openLeftDrawer}
            openAndCloseLeftBtnClicked={this.openAndCloseLeftBtnClicked}
            openRightDraw={this.state.openRightDrawer}
            openAndCloseRightBtnClicked={this.openAndCloseRightBtnClicked}
            totalQuantity={this.state.totalQuantity}
            totalPrice={this.state.totalPrice}
            cart={this.state.cart}
          />
        </header>

        <main className="md:mx-28 xs:mx-8 ease-in duration-300 min-h-screen pb-20">
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <Home state={this.state} addToCart={this.addToCart} />;
              }}
            />
            <Route path="/cart" render={() => <Cart state={this.state} />} />
            <Route
              path="/Product/:id"
              render={() => {
                return (
                  <Product state={this.state} addToCart={this.addToCart} />
                );
              }}
            />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        </main>

        <footer className="App-footer absolute bottom-0 bg-secondary text-white w-full p-5">
          footer
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
