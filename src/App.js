import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
              </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
