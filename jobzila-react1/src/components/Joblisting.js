import { useState, useEffect } from "react";
import Joncontent from "./Joncontent";
import Searchjob from "./Searchjob";

function Joblisting() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw Error(
            "Unfortunately there's no job data available at the moment"
          );
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        console.log(err.stack);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    //(async () => await fetchItems())();

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  return (
    <main>
      <section id="job-listings" class="container">
        <Searchjob search={search} setSearch={setSearch} />
        <h1>Job Listings</h1>
        <div id="job-listings-container">
          {isLoading && <p>Please wait while data being loaded...</p>}
          {fetchError && (
            <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
          )}
          {!fetchError && !isLoading && (
            <Joncontent
              items={items.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default Joblisting;
