import { Card, Row, Col, Button } from "antd";
import "./Card.css";
import {
  ComposableMap,
  Geography,
  Geographies,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

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
    location,
  } = props;

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  console.log(typeof location.latitude);

  return (
    <Card title={trade_name} bordered={true} className="card">
      <Row>
        <Col span={4}>
          <ComposableMap
            projectionConfig={{
              scale: 20000,
              center:
                location == null
                  ? [-75, 39]
                  : [location.longitude, location.latitude],
            }}
            style={{ maxHeight: "100px" }}
          >
            <ZoomableGroup
              center={
                location == null
                  ? [-75, 39]
                  : [location.longitude, location.latitude]
              }
              zoom={9}
            >
              <Geographies geography="https://raw.githubusercontent.com/OpenDataDE/de-geojson-data/master/firstmap/boundaries/de_boundaries_county_state.min.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
              <Marker coordinates={[location.longitude, location.latitude]}>
                <circle r={2} fill="#FF5533" />
              </Marker>
            </ZoomableGroup>
          </ComposableMap>
        </Col>
        <Col span={20}>
          <Row gutter={10} justify="space-evenly" align="middle">
            <Col span={9}>
              <p className="emp"> Main Address </p>
              <p>{toTitleCase(address_1)}</p>
              <p>{toTitleCase(city) + ", " + state + " " + zip}</p>
            </Col>
            <Col span={9}>
              <p className="emp"> Services </p>
              <p>{toTitleCase(business_activity)}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <button
        type="button"
        className="detailsb"
        onclick=`https://www.google.com/maps/search/?api=1&query=${location.latitude}%2C${location.longitude}&query_place_id=${trade_name}`
      >
        <spanclassName="details">
          View Details
        </a>
      </button>
    </Card>
  );
};

export default AppCard;
