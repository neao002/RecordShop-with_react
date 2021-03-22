import { useContext, useState } from "react";
import ThumbNail from "./ThumbnailAlbum";
import UserContext from "../../ContextFolder/Context";
import { Link } from "react-router-dom";

import { Form, FormControl, Button } from "react-bootstrap";
function MainAlbumContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const context = useContext(UserContext);
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
              setSearchTerm(event.target.value);
            }}
          />
        </Form>
      </h1>

      <div className="d-flex flex-wrap justify-content-center">
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
                className="thumbNailCard mb-3"
                style={{ width: "32%", height: "460px" }}
              >
                <Link
                  className="thumbnailText"
                  to={{ pathname: `/album/${album.title}`, state: { album: album } }}
                >
                  <ThumbNail
                    key={album.id}
                    id={album.id}
                    title={album.title}
                    artist={album.artist}
                    releasedYear={album.releaseYear}
                    price={album.price}
                    image={album.image}
                  ></ThumbNail>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MainAlbumContainer;
