import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Info = () => {
  const [data, setData] = useState("");
  const getData = async (query) => {
    const response = await fetch("/public/info.md");

    return await response.text();
  };

  useEffect(() => {
    setData(getData());
  }, []);
  return <ReactMarkdown children={data} />;
};

export default Info;
