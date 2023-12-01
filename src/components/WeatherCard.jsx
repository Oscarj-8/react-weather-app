import { Card, Icon, Image } from "semantic-ui-react";
import DateDisplay from "./DateDisplay";

const WeatherCard = ({ data }) => {
  const { name, main, weather, sys, dt } = data;

  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const cardStyle = {
    backgroundColor: " #1e90ff",
    borderRadius: "1.4em",
    boxShadow: "5px 5px 10px #1e90ff",
  };

  const CardHeader = {
    color: "#f3f3f3",
  };

  return (
    <Card style={cardStyle}>
      <Card.Content>
        <Card.Header style={CardHeader}>
          <Image
            src={iconUrl}
            wrapped
            ui={false}
            className="major-city-image"
          />
          {name}, {sys.country}
        </Card.Header>
        <Card.Meta>
          <DateDisplay timestamp={dt} />
        </Card.Meta>
        <Card.Description>
          {weather[0].main} - {weather[0].description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="thermometer" />
        {main.temp - 273.15} °C
      </Card.Content>
    </Card>
  );
};
export default WeatherCard;
