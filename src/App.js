import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './components/auth/AuthContext';
import LogInd from './components/auth/LogInd';
import Opret from './components/auth/Opret';
import Profil from './components/auth/Profil';
import  Cart  from './components/cart/Cart';
import CartContextProvider from './components/cart/CartContext';
import AddProduct from './components/forms/AddProduct';
import BarsGallery from './components/gallery/BarsGallery';
import CompleteGallery from './components/gallery/CompletesGallery';
import DecksGallery from './components/gallery/DecksGallery';
import DeleGallery from './components/gallery/DeleGallery';
import WheelsGallery from './components/gallery/WheelsGallery';
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ProductDetails from './components/productDetails/ProductDetails';
import ProductsContextProvider from './firebase/ProductsContext';


function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <div className="App">
              <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                          <Home />
                        </Route>
                        <Route exact path="/opret-bruger">
                            <Opret />
                        </Route>
                        <Route exact path="/log-ind">
                            <LogInd />
                        </Route>
                        <Route exact path="/profil">
                            <Profil />
                        </Route>
                        <Route exact path="/add-product">
                            <AddProduct />
                        </Route>
                        <Route exact path="/komplette">
                            <CompleteGallery />
                        </Route>
                        <Route exact path="/dele/bars">
                            <DeleGallery />
                            <BarsGallery />
                        </Route>
                        <Route exact path="/dele/decks">
                            <DeleGallery />
                            <DecksGallery />
                        </Route>
                        <Route exact path="/dele/hjul">
                            <DeleGallery />
                            <WheelsGallery />
                        </Route>
                        <Route exact path="/produkt/:category/:id">
                            <ProductDetails />
                        </Route>
                        <Route exact path="/kurv">
                            <Cart />
                        </Route>
                    </Switch>
                </div>
              <Footer />
            </div>
          </CartContextProvider>
        </ProductsContextProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
