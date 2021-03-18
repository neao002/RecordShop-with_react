import { useContext, useState } from "react";
import ThumbNail from "./ThumbnailAlbum";
import UserContext from "../../ContextFolder/Context";
import { Link } from "react-router-dom";

function MainAlbumContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const context = useContext(UserContext);
  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <h1
        className=" bg-dark mx-auto py-2 px-4 mb-4"
        style={{ color: "#ff7700" }}
      >
        Latest
        <input
          className="ml-5"
          type="text"
          placeholder="Search your Fav Music"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </h1>

      <div className="d-flex flex-wrap justify-content-start">
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
            return (
              //! when we put all container in link,the button(add to chart) gets disabled,we need to find a solution for it
              //! i kept inside div for now

              <div style={{ width: "32%", height: "460px" }}>
                <Link
                  className="thumbnailCard"
                  to={{ pathname: "/album", state: { album: album } }}
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
