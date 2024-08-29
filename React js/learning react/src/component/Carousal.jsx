import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  const images = [
    "https://images.unsplash.com/photo-1724427886551-e3830f6fde0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724079694401-4da6a4ab201f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724240952908-8e59ddc8e608?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={1000}
        stopOnHover={true}
        renderArrowPrev={(clickHandler) => (
          <button
            type="button"
            onClick={clickHandler}
            style={{
              position: "absolute",
              zIndex: 2,
              top: "50%",
              left: "24%",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            &#8249; {/* Left arrow symbol */}
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button
            type="button"
            onClick={clickHandler}
            style={{
              position: "absolute",
              zIndex: 2,
              top: "50%",
              right: "24%",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            &#8250; {/* Right arrow symbol */}
          </button>
        )}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "800px" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
