import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Import Images
const imageModules = import.meta.glob("../../assets/img/models/*.jpg", {
  eager: true,
});
const images = Object.values(imageModules).map((module) => module.default);

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Debugging Border */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Slider {...settings}>
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <img
                src={img}
                alt={`Model ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <Typography variant="h2">Mariauxis</Typography>
        <Typography variant="h5">Academy</Typography>
      </Box>
    </Box>
  );
};

export default Home;
