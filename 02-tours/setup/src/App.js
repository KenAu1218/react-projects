import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const deleteTour = (id) => {
    const newtours = tours.filter((tour) => tour.id !== id); // filter don't add {} as () => {}
    setTours(newtours);
  };

  const getTours = async () => {
    setRefresh(true);

    const response = await fetch(url);

    const data = await response.json();

    setTours(data);

    setRefresh(false);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (refresh == true && tours.length == 0) {
    return (
      <main>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  } else if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tour Left</h2>
          <button className="btn" onClick={() => getTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <>
        <Tours tours={tours} deleteTour={deleteTour}></Tours>
      </>
    );
  }
}

export default App;
