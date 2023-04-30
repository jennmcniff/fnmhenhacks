import Services from "./Services/Services";
import { Row, Col } from "antd";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { QueryContext } from "../../Pages/Home/Home";

const { Search } = Input;

const AppSearch = () => {
  const [search, setSearch] = useState("");
  const [zipCode, setZip] = useState("");
  const { query, setQuery } = useContext(QueryContext);

  const changeSearch = (searchP) => {
    setSearch(searchP);
  };

  const changeZip = (zipP) => {
    setZip(zipP);
  };

  useEffect(() => {
    setQuery({ zipcode: zipCode, name: search });
  }, [search, zipCode]);

  return (
    <Row gutter={6}>
      <Col span={4}>
        <Services />
      </Col>
      <Col span={16}>
        <Search placeholder="Search Name" allowClear onSearch={changeSearch} />
      </Col>
      <Col span={4}>
        <Search placeholder="Zipcode" allowClear onSearch={changeZip} />
      </Col>
    </Row>
  );
};

export default AppSearch;
