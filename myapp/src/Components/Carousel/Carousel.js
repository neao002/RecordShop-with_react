import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import UserContext from "../../ContextFolder/Context";

function Carousell(props) {
  const context = useContext(UserContext);
  //! add to chart will connect to button but we can create carousel items with map
  const addToChart = (dispatch) => {
    dispatch({
      type: "ADD_CHART",
      payload: props.id,
    });
  };
  return (
    <>
      <Carousel
        fade
        style={{
          height: "50vh",
          background: "white",
          margin: "10px 200px",
          padding: "0 120px",
        }}
      >
        <Carousel.Item>
          <div
            className="bg-white px-5 d-flex justify-content-between align-items-center"
            style={{ height: "50vh" }}
          >
            <div className="w-50 ">
              <h1 className="text-secondary text-center">hello 1</h1>
              <p>
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </p>
              <h5 className="text-center">Price: -- €</h5>
              <button className="carouselButton">Add to Chart</button>
            </div>

            <img
              style={{ height: "30vh", width: "35%" }}
              // src={Vinyl}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="bg-white px-5 d-flex justify-content-between align-items-center"
            style={{ height: "50vh" }}
          >
            <div className="w-50 ">
              <h1 className="text-secondary text-center">hello 2</h1>
              <p>
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </p>
              <h5 className="text-center">Price: -- €</h5>
              <button className="carouselButton">Add to Chart</button>
            </div>

            <img
              style={{ height: "30vh", width: "35%" }}
              // src={SecondVinyl}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="bg-white px-5 d-flex justify-content-between align-items-center"
            style={{ height: "50vh" }}
          >
            <div className="w-50 ">
              <h1 className="text-secondary text-center">hello 3</h1>
              <p>
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </p>
              <h5 className="text-center">Price: -- €</h5>
              <button className="carouselButton">Add to Chart</button>
            </div>

            <img
              style={{ height: "30vh", width: "35%" }}
              // src={ThirdVinyl}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="bg-white px-5 d-flex justify-content-between align-items-center"
            style={{ height: "50vh" }}
          >
            <div className="w-50 ">
              <h1 className="text-secondary text-center">hello 4</h1>
              <p>
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </p>
              <h5 className="text-center">Price: -- €</h5>
              <button className="carouselButton">Add to Chart</button>
            </div>

            <img
              style={{ height: "30vh", width: "35%" }}
              // src={FourthVinyl}
              alt="Fourth slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousell;
