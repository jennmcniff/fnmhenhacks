import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

const markdown = `
## Assets:
---
An asset is an owned belonging that can provide future
economic benefit. These goods are durable and can be translated into a
dollar amount ('liquidated'). Common examples include a house, car, or
precious metals. 
## Cash-checking
---
Cash-checking services describe when
a bank can cash an individual's check, regardless of whether they have a
bank account.
`;

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          textAlign: "left",
          margin: "0px auto auto auto",
          maxWidth: "50%",
          marginLeft: "0%",
          display: "inline-block",
        }}
      >
        <ReactMarkdown children={markdown}></ReactMarkdown>
      </div>
    </div>
  );
};

export default Info;
