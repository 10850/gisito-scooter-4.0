import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './components/auth/AuthContext';
import LogInd from './components/auth/LogInd';
import Opret from './components/auth/Opret';
import Profil from './components/auth/Profil';
import AddProduct from './components/forms/AddProduct';
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <Router>
      <AuthProvider>
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
                </Switch>
            </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
