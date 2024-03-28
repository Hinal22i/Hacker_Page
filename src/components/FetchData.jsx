import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FEFBF6",
    },
    secondary: {
      main: "#31363F",
    },
    warning: {
      main: "#31363F",
    },
    error: {
      main: "#31363F",
    },
  },
});
const FetchData = ({ url }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((respone) => respone.json())
        .then((data) => {
          console.log(data.hits);
          // console.log(data.hits[11].author);
          setNews(data.hits);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);
  const calculateTimeAgo = (createdAt) => {
    const createdDate = new Date(createdAt * 1000); // Convert to milliseconds
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate - createdDate); // Difference in milliseconds
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)); // Convert milliseconds to hours
    return `${hoursDifference} hours ago`;
  };

  const handleClick = () => {
    console.log("hi");
  };
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          margin: 10,
        }}
      >
        {news.map((news) => (
          <Box key={Math.random()} sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <a
                href={news.url}
                key={news.tile}
                style={{
                  margin: 20,
                  textDecoration: "none",
                  color: "black",
                  fontSize: "25px",
                }}
              >
                {news.title}
              </a>
              {/* <Divider color="warning" variant="middle" /> */}
              <div style={{ margin: 10 }}>
                <Chip
                  label={`${news.points} points by ${news.author}`}
                  size="small"
                  color="warning"
                />{" "}
                <Chip
                  label={calculateTimeAgo(news.created_at_i)}
                  size="small"
                  color="warning"
                />{" "}
                <Chip
                  label={`${news.num_comments} comments`}
                  size="small"
                  color="warning"
                />{" "}
                <Chip
                  variant="outlined"
                  label="hide"
                  size="small"
                  color="error"
                  onClick={handleClick}
                />
              </div>
            </AppBar>
          </Box>
        ))}
      </div>
    </ThemeProvider>
    //   <div key={Math.random()}>
    //     <h2 style={{ backgroundColor: "red" }} key={news.title}>
    //       {news.title}
    //     </h2>
    //     <p key={news.points}>
    //       {news.points} points by {news.author}{" "}
    //       {calculateTimeAgo(news.created_at_i)} <button>Hide</button>{" "}
    //       {news.num_comments} comments
    //     </p>
    //   </div>
    // ))}
  );
};

export default FetchData;
