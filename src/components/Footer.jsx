import Chip from "@mui/material/Chip";

import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
const theme = createTheme({
  palette: {
    primary: {
      main: "#222831",
    },
    secondary: {
      main: "#31363F",
    },
    warning: {
      main: "#EEEEEE",
    },
    error: {
      main: "#76ABAE",
    },
  },
});

const Footer = () => {
  const handleClick = () => {
    console.log("hi");
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <div>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <Chip
                color="secondary"
                size="small"
                label="Guidelines"
                onClick={handleClick}
              />{" "}
              <Chip
                color="secondary"
                size="small"
                label="FAQ"
                onClick={handleClick}
              />{" "}
              <Chip
                color="secondary"
                size="small"
                label="Lists"
                onClick={handleClick}
              />{" "}
              <Chip
                color="secondary"
                size="small"
                label="API"
                onClick={handleClick}
              />{" "}
              <Chip
                color="secondary"
                size="small"
                label="Security"
                onClick={handleClick}
              />{" "}
              <Chip
                color="secondary"
                size="small"
                label="Legal"
                onClick={handleClick}
              />{" "}
              <Chip
                color="secondary"
                size="small"
                label="Apply to YC"
                onClick={handleClick}
              />{" "}
              <Chip
                color="secondary"
                size="small"
                label="Contact"
                onClick={handleClick}
              />{" "}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "1rem",
              }}
            >
              <TextField
                sx={{ color: "#EEE" }}
                color="warning"
                id="standard-search"
                label="Search your news"
                type="search"
                focused
              />
            </div>
          </div>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
