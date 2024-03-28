import { useEffect, useState } from "react";

function App() {
  const url = "http://hn.algolia.com/api/v1/search?query=...";
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

  return (
    <>
      {news.map((news) => (
        <div key={Math.random()}>
          <h2 key={news.title}>{news.title}</h2>
          <p key={news.points}>
            {news.points} points by {news.author}{" "}
            {calculateTimeAgo(news.created_at_i)} <button>Hide</button>{" "}
            {news.num_comments} comments
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
