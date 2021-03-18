import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import UserContext from "../../ContextFolder/Context";
import CarouselSingleItem from "./CarouselItem";
function CarouselMain(props) {
  const context = useContext(UserContext);
  return (
    <>
      <Carousel
        fade
        style={{
          height: "70vh",
          background: "white",
          margin: "10px 0",
          padding: "0 120px",
        }}
      >
        {context.myStateData.carouselAlbums.map((album) => {
          return (
            <Carousel.Item key={album.id}>
              <CarouselSingleItem
                id={album.id}
                title={album.title}
                artist={album.artist}
                price={album.price}
                img={album.image}
              ></CarouselSingleItem>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselMain;
