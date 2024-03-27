import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        margin: 10,
      }}
    >
      {news.map((news) => (
        <Box key={Math.random()} sx={{ flexGrow: 1 }}>
          <AppBar
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            position="static"
          >
            <h3 key={news.tile} style={{ margin: 20 }}>
              {news.title}
            </h3>
            {/* <Divider color="warning" variant="middle" /> */}
            <div style={{ margin: 10 }}>
              <Chip
                label={`${news.points} points by ${news.author}`}
                size="small"
                variant="outlined"
                color="warning"
              />{" "}
              <Chip
                label={calculateTimeAgo(news.created_at_i)}
                size="small"
                variant="outlined"
                color="warning"
              />{" "}
              <Chip
                label={`${news.num_comments} comments`}
                size="small"
                variant="outlined"
                color="warning"
              />{" "}
              <Chip
                label="hide"
                size="small"
                variant="outlined"
                color="error"
                onClick={handleClick}
              />
            </div>
          </AppBar>
        </Box>
      ))}
    </div>
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
