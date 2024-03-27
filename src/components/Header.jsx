import Navbar from "./Navbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="warning" position="static">
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
            <Navbar />
          </Typography>
          <Button variant="contained" color="primary">
            Contained
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
