import "./Services.css";
import { Dropdown, Checkbox, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useEffect, useState, useContext } from "react";
import { QueryContext } from "../../../Pages/Home/Home";

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const { query, setQuery } = useContext(QueryContext);

  const makeChange = (value) => {
    const index = selected.indexOf(value);
    if (index > -1) {
      selected.splice(index);
      var new_select = [...selected];
      setSelected(new_select);
    } else {
      setSelected([...selected, value]);
    }
    setOpen(true);
  };

  // useEffect(() => {
  //   // setQuery({ services: [...selected] });
  // }, [selected]);

  const items = [
    {
      label: (
        <Checkbox value="Credit Card" onChange={() => makeChange("cc")}>
          Card
        </Checkbox>
      ),
      key: "0",
    },
    {
      label: (
        <Checkbox value="Loans" onClick={() => makeChange("loans")}>
          Loans
        </Checkbox>
      ),
      key: "1",
    },
  ];

  return (
    <Dropdown menu={{ items }} open={open} onClick={() => setOpen(!open)}>
      <div className="services">
        Services
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default Services;
