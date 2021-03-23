import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import UserContext from "./ContextFolder/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//! Components
import Navbar from "./Components/Navbar/MyNavbar";
import Carousel from "./Components/Carousel/Carousel";
import PopUp from "./Components/PopUp/LoginPopup";
import MainAlbumContainer from "./Components/AlbumPage/MainAlbumContainer";
import AlbumPage from "./Components/AlbumPage/AlbumPageContainer";
// contact, do not forget to add ur packages, you can find them in description!
import Contacts from "./Components/ContactForm/Contacts";
import Footer from "./Components/Footer/Footer";
import Payment from "./Components/Payment/Payment";

function App() {
  const context = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Navbar />
        <div className=" switch-checkbox">
          <button type="submit" class="btn btn-light">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            Light-Dark
          </button>
        </div>

        <Switch>
          <Route path="/" exact>
            <Carousel />
            {context.myStateData.popUp ? <PopUp></PopUp> : null}
            <MainAlbumContainer />
          </Route>
          <Route
            //? trying
            path="/bestsellers"
            exact
          ></Route>
          <Route path="/album" component={AlbumPage} />
          <Route
            //? trying
            path="/payment"
            exact
          >
            {/* example payment page in component,real one by Ahmad */}
            <Payment></Payment>
          </Route>
        </Switch>
        <Contacts />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
