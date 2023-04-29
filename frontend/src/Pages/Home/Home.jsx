import Search from "../../Components/Search/Search";
import View from "../../Components/View/View";
import { useState, createContext } from "react";
import { useEffect } from "react";

export const QueryContext = createContext(null);

const Home = () => {
  const [query, setQuery] = useState({ name: "", services: [], zipcode: "" });

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      <Search />
      <View />
    </QueryContext.Provider>
  );
};

export default Home;
