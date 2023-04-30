import Search from "../../Components/Search/Search";
import View from "../../Components/View/View";
import "./Home.css";
import { useState, createContext } from "react";
import { useEffect } from "react";

export const QueryContext = createContext(null);

const Home = () => {
  const [query, setQuery] = useState({ name: "", services: [], zipcode: "" });

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <QueryContext.Provider value={{ query, setQuery }}>
        <div className="main">
          <div className="search">
            <Search />
          </div>
          <div className="view">
            <View />
          </div>
        </div>
      </QueryContext.Provider>
    </>
  );
};

export default Home;
