import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../../Pages/Home/Home";

const View = () => {
  const { query, _ } = useContext(QueryContext);
  const [data, setData] = useState({});

  useEffect(() => {}, [query]);

  useEffect(() => {}, [data]);

  return (
    <div>
      <p>{query.name}</p>
      <p>{query.zipcode}</p>
    </div>
  );
};

export default View;
