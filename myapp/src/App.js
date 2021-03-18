import { useContext } from "react";
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
import SearchResult from "./Components/searchResult/SearchResult";

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
          <Route path="/searchresult">
            <Carousel></Carousel>
            <SearchResult></SearchResult>
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
            component
          >
            {/* Ahmad works on it */}
            {/* <Payment></Payment> */}
          </Route>
        </Switch>
        {/* Contact Form */}
        <Contacts />
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
