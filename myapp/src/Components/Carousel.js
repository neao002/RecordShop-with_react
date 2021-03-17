import React from "react";
import { Carousel } from "react-bootstrap";
import Vinyl from "../assets/img/carousel/vinyl.jpeg";
import SecondVinyl from "../assets/img/carousel/secondVinly.jpeg";
import ThirdVinyl from "../assets/img/carousel/thirdVinly.jpeg";
import FourthVinyl from "../assets/img/carousel/fourthVinly.jpeg";
function carousel() {
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
              src={Vinyl}
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
              src={SecondVinyl}
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
              src={ThirdVinyl}
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
              src={FourthVinyl}
              alt="Fourth slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default carousel;
