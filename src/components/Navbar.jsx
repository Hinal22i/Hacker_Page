import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const handleClick = () => {
  console.log("hi");
};
const Navbar = ({ theme }) => {
  return (
    <Stack sx={{ marginBottom: 1 }} direction="row" spacing={2}>
      <Chip
        theme={theme}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
        color="secondary"
        label="New"
        onClick={handleClick}
      />

      <Chip
        theme={theme}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
        color="secondary"
        label="Past"
        onClick={handleClick}
      />

      <Chip
        theme={theme}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
        color="secondary"
        label="Ask"
        onClick={handleClick}
      />
      <Chip
        theme={theme}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
        color="secondary"
        label="Show"
        onClick={handleClick}
      />
      <Chip
        theme={theme}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
        color="secondary"
        label="Jobs"
        onClick={handleClick}
      />
      <Chip
        theme={theme}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
        color="secondary"
        label="Submit"
        onClick={handleClick}
      />
    </Stack>
  );
};

export default Navbar;
