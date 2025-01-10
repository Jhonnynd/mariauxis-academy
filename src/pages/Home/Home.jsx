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
        <Typography
          sx={{
            fontSize: "7rem",
            textShadow: "1px -2px 11px rgba(0,0,0,1)",
            fontFamily: "serif",
          }}
          variant="h2"
        >
          Mariauxis
        </Typography>
        <Typography
          sx={{
            fontSize: "3rem",
            textShadow: "1px -2px 11px rgba(0,0,0,1)",
            fontFamily: "serif",
          }}
          variant="h5"
        >
          Academy
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
