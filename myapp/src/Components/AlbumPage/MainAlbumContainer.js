import { useContext, useState } from "react";
import ThumbNail from "./ThumbnailAlbum";
import UserContext from "../../ContextFolder/Context";

import { Link } from "react-router-dom";

import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCoffee,
  faDesktop,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
function MainAlbumContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const context = useContext(UserContext);
  // onChange = (e) => {
  //   setSearchTerm({ searchTerm: e.target.value });
  // };
  const addToChart = (dispatch, id) => {
    dispatch({
      type: "ADD_CHART_THUMB",
      payload: id,
    });
  };
  return (
    <div className="mx-auto mb-5" style={{ width: "80%" }}>
      <h1
        className=" bg-dark mx-auto py-2 px-4 mb-4"
        style={{ color: "#ff7700" }}
      >
        Latest Music :
        <Form inline>
          <FormControl
            className=" btnSearchLatest mx-5 mt-2"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              event.preventDefault();
              setSearchTerm(event.target.value);
            }}
          />
        </Form>
      </h1>

      <div className="myCarousel d-flex flex-wrap justify-content-center">
        {context.myStateData.albums
          .filter((values) => {
            if (searchTerm == "") {
              return values;
            } else if (
              values.title
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return values;
            }
          })
          .map((album) => {
            // console.log(album, "here");
            return (
              <div
                className="thumbNailCard mb-3 d-flex flex-column align-items-center"
                style={{ width: "32%", height: "460px" }}
                // key={album.id}
              >
                <Link
                  className="thumbnailText"
                  to={{ pathname: "/album", state: { album: album } }}
                >
                  <ThumbNail
                    title={album.title}
                    artist={album.artist}
                    releasedYear={album.releaseYear}
                    price={album.price}
                    image={album.image}
                  ></ThumbNail>
                </Link>
                <button
                  className="btn-primary mt-2"
                  style={{ width: "50%", height: "30px" }}
                  onClick={() => {
                    addToChart(context.myDispatch, album.id);
                  }}
                >
                  <FontAwesomeIcon
                    className=" highlight logocart mr-2 icon"
                    icon={faShoppingCart}
                  />
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MainAlbumContainer;
