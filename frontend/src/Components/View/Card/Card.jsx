import { Card, Row, Col, Button } from "antd";
import { useEffect } from "react";
import "./Card.css";

const AppCard = (props) => {
  const {
    business_name,
    trade_name,
    business_activity,
    address_1,
    address_2,
    city,
    state,
    zip,
    country,
  } = props;

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <Card title={trade_name} bordered={true} className="card">
      <Row>
        <Col span={6}>Map if works</Col>
        <Col span={18}>
          <Row gutter={10} justify="space-around" align="middle">
            <Col span={9}>
              <p className="emp"> Main Address </p>
              <p>{toTitleCase(address_1)}</p>
              <p>{toTitleCase(city) + ", " + state + " " + zip}</p>
            </Col>
            <Col span={9}>
              <p className="emp"> Services </p>
              <p>{toTitleCase(business_activity)}</p>
            </Col>
            <Col span={6}>
              <p className="detailsb">
                <a href="/" className="details">
                  View Details
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default AppCard;
