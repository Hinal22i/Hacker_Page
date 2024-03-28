import Navbar from "./Navbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <img
              style={{ width: 70, height: 70, marginRight: 20 }}
              src="src\assets\hacker2.png"
            />
            <Typography
              color="warning"
              variant="h3"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Hacker News
              <Navbar theme={theme} />
            </Typography>
            <Button
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
              variant="contained"
              color="error"
            >
              Log In
            </Button>
            <MenuIcon
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
