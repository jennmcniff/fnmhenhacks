import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../../Pages/Home/Home";
import AppCard from "./Card/Card";
import "./View.css";

const View = () => {
  const { query, _ } = useContext(QueryContext);
  const [data, setData] = useState([]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    const jData = async () => {
      const response = await fetch(
        "/api/search?" +
          new URLSearchParams({
            name: query.name,
            zip: query.zipcode,
          })
      );

      const jsonData = await response.json();

      setData(jsonData.splice(0, 20));
    };

    jData();
  }, [query]);

  useEffect(() => {
    const jData = async () => {
      const response = await fetch("/api/search");

      const jsonData = await response.json();

      setData(shuffle(jsonData).splice(0, 20));
    };

    jData();
  }, []);

  return (
    <div className="content">
      {data.map((d) => (
        <AppCard id={d.id} {...d} />
      ))}
    </div>
  );
};

export default View;
