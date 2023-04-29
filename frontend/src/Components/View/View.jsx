import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../../Pages/Home/Home";

const View = () => {
  const { query, _ } = useContext(QueryContext);
  const [data, setData] = useState({});

  const getData = async (query) => {
    const response = await fetch(
      "/api/search?" +
        new URLSearchParams({
          name: query.name,
          zipcode: query.zipcode,
        })
    );
    const jsonData = await response.json();

    console.log(jsonData);
  };

  useEffect(() => {
    getData(query);
  }, [query]);

  useEffect(() => {
    getData(query);
  }, []);

  useEffect(() => {}, [data]);

  return (
    <div>
      <p>{query.name}</p>
      <p>{query.zipcode}</p>
    </div>
  );
};

export default View;
