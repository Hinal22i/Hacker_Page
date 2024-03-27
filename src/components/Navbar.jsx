import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const handleClick = () => {
  console.log("hi");
};
const Navbar = () => {
  return (
    <Stack sx={{ marginBottom: 1 }} direction="row" spacing={2}>
      <Chip color="warning" label="New" onClick={handleClick} />

      <Chip color="warning" label="Past" onClick={handleClick} />

      <Chip color="warning" label="Ask" onClick={handleClick} />
      <Chip color="warning" label="Show" onClick={handleClick} />
      <Chip color="warning" label="Jobs" onClick={handleClick} />
      <Chip color="warning" label="Submit" onClick={handleClick} />
    </Stack>
  );
};

export default Navbar;
