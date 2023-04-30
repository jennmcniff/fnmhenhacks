import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Info = () => {
  const [data, setData] = useState("");
  const getData = async (query) => {
    const response = await fetch("/static/info.md");

    console.log(response.text());
  };

  useEffect(() => {
    getData();
  }, []);
  return <ReactMarkdown>{"# Your markdown here"}</ReactMarkdown>;
};

export default Info;
