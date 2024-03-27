import FetchData from "./components/FetchData";
import Header from "./components/Header";

function App() {
  const url = "http://hn.algolia.com/api/v1/search?query=...";
  return (
    <>
      <Header />
      <FetchData url={url} />;
    </>
  );
}

export default App;
