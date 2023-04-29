import Search from "../../Components/Search/Search";
import View from "../../Components/View/View";
import { useState, createContext } from "react";

export const QueryContext = createContext(null);

const Home = () => {
  const [query, setQuery] = useState({ name: "", services: [], zipcode: "" });

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      <Search />
      <View />
    </QueryContext.Provider>
  );
};

export default Home;
