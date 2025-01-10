import { Box, Typography } from "@mui/material";
import Logo from "../../assets/img/logo_render.png";
const Informacion = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", m: "10px" }}>
        <Box sx={{ width: "100px" }}>
          <img src={Logo} alt="logo" style={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            backgroundColor: "#d09e00",
            height: "1px",
            width: "100%",
            m: "0 30px",
          }}
        ></Box>
      </Box>
      <Box>
        <Box sx={{ textTransform: "uppercase", m: "20px" }}>
          <Typography variant="h3" gutterBottom>
            Objetivos
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            General: Formar de manera integral a niñas, adolescentes, jóvenes y
            adultas en el mundo de la belleza y el modelaje.
          </Typography>
          <Box
            sx={{
              backgroundColor: "#d09e00",
              height: "1px",
              width: "100%",
            }}
          ></Box>
          <ul style={{ color: "#d09e00", p: "0, 20px" }}>
            <li>
              <Typography variant="body1">
                Preparar a las modelos para saber enfrentarse a los retos de la
                vida y convertirse en ejemplos a seguir.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Impartir técnicas de comportamiento social que encaminen a
                nuestras alumnas a ser modelos de vida, que sirvan de
                inspiración para las generaciones futuras.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Brindar las herramientas necesarias para un buen
                desenvolvimiento en cualquier escenario que se les presente.
              </Typography>
            </li>
          </ul>
        </Box>
        <Box sx={{ textTransform: "uppercase", m: "20px" }}>
          <Typography variant="h3" gutterBottom>
            Visión
          </Typography>
          <Box
            sx={{
              backgroundColor: "#d09e00",
              height: "1px",
              width: "100%",
            }}
          ></Box>
          <Typography
            variant="body1"
            sx={{ m: "20px 0", color: "primary.main" }}
          >
            Trascender entre nuestra comunidad de alumnas, brindandoles las
            herramientas necesarias para su desarrollo y crecimiento personal,
            asi como ir ampliando nuestros programas de enseñanza y alcance
            hacia mas chicas y jovenes en formacion, con la finalidad de
            desarollar mas en contacto con su belleza interna y externa. Y
            Ayudarlas a introducirse y acoplarse de la mejor manera en las áreas
            estudiantiles, laborales, sociales, experimentales, físicas y
            espirituales.
          </Typography>
        </Box>
        <Box sx={{ textTransform: "uppercase", m: "20px" }}>
          <Typography variant="h3" gutterBottom>
            Misión
          </Typography>
          <Box
            sx={{
              backgroundColor: "#d09e00",
              height: "1px",
              width: "100%",
            }}
          ></Box>
          <Typography
            variant="body1"
            sx={{ m: "20px 0", color: "primary.main" }}
          >
            Formar de manera integral a nuestras alumnas en ámbitos diversos de
            la cotidianidad, inculcando principios y valores, técnicas de
            comportamiento social, estrategias de crecimiento personal y
            desarrollo de competencias en la actuación, pasarela, inglés,
            oratoria y uso adecuado de redes sociales.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          m: "10px",
          flexDirection: "row-reverse",
        }}
      >
        <Box sx={{ width: "100px" }}>
          <img src={Logo} alt="logo" style={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            backgroundColor: "#d09e00",
            height: "1px",
            width: "100%",
            m: "0 30px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Informacion;
