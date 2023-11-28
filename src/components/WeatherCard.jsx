import { Card, Icon, Image } from "semantic-ui-react";
import DateDisplay from "./DateDisplay";

const WeatherCard = ({ data }) => {
  const { name, main, weather, sys, dt } = data;

  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <Card className="major-city-card">
      <Card.Content>
        <Card.Header className="card-header">
          <Image
            src={iconUrl}
            wrapped
            ui={false}
            className="major-city-image"
          />
          {name}
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
