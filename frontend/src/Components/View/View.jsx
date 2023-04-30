import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../../Pages/Home/Home";
import AppCard from "./Card/Card";
import "./View.css";

const d = {
  business_name: "RIVIERA FINANCE LLC",
  trade_name: "RIVIERA FINANCE LLC",
  business_activity: "FINANCE OR SMALL LOAN AGENCY",
  address_1: "ROSEWOOD 28 DEER CIRCLE",
  address_2: "",
  city: "BEAR",
  state: "DE",
  zip: "19701",
  country: "UNITED STATES",
  location: {
    latitude: 39.62742,
    longitude: -75.6609,
  },
};

const View = () => {
  const { query, _ } = useContext(QueryContext);
  const [data, setData] = useState({});

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

      setData(jsonData);
    };

    jData();
  }, [query]);

  useEffect(() => {
    const jData = async () => {
      const response = await fetch("/api/search");

      const jsonData = await response.json();

      setData(jsonData);
    };

    jData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="content">
      {data.map((d) => (
        <AppCard {...d} />
      ))}
    </div>
  );
};

export default View;
