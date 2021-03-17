import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserContext from "./Context/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//! Components
import Navbar from "./Components/navbar";
import Carousel from "./Components/Carousel";
import PopUp from "./Components/loginPopup";
import MainAlbumContainer from "./Components/mainAlbumContainer";
function App() {
  const context = useContext(UserContext);
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Carousel></Carousel>
            {context.myStateData.popUp ? <PopUp></PopUp> : null}
            <MainAlbumContainer></MainAlbumContainer>
          </Route>
          <Route
            //? trying
            path="/bestsellers"
            exact
            component={() => {
              return <h1>bestseller</h1>;
            }}
          ></Route>
        </Switch>
        {/* //! footer comes bottom */}
      </div>
    </Router>
  );
}

export default App;
