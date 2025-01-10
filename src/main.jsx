import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ResponsiveAppBar from "./Components/ResponsiveAppBar.jsx";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Define the custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#d09e00", // Gold
    },
    secondary: {
      main: "#FDFBEA", // Cream
    },
    background: {
      default: "#000000", // Black
      paper: "#000000", // Black
    },
    text: {
      primary: "#FDFBEA", // Cream
      secondary: "#D4C66D", // Gold
    },
  },
  typography: {
    body1: {
      fontSize: "0.8rem", // Correct placement of typography styles
    },
    h3: {
      fontFamily: "Garamond, sans-serif",
    },
  },
});
// Render the application
createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    {/* Reset global CSS styles to align with the theme */}
    <CssBaseline />
    <BrowserRouter basename="/mariauxis-academy/">
      <ResponsiveAppBar />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
