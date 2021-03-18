import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserContext from "./ContextFolder/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//! Components

import Navbar from "./Components/Navbar/MyNavbar";
import Carousel from "./Components/Carousel/Carousel";
import PopUp from "./Components/PopUp/LoginPopup";
import MainAlbumContainer from "./Components/MainAlbumContainer";
import AlbumPage from "./Components/AlbumPage/AlbumPageContainer";
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
          <Route path="/album" component={AlbumPage} />
          <Route
            //? trying
            path="/payment"
            exact
            component={() => {
              return <h1>Payment Part</h1>;
            }}
          ></Route>
        </Switch>
        {/* //! footer comes bottom */}
      </div>
    </Router>
  );
}

export default App;
