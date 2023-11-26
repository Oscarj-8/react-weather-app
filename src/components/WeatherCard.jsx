import { Card, Icon, Image } from "semantic-ui-react";
import moment from "moment";

const WeatherCard = ({ data }) => {
  const { name, main, weather, sys, dt } = data;

  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const date = moment(dt * 1000).format("MMMM Do YYYY, h:mm:ss a");

  return (
    <Card>
      <Image src={iconUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{date}</span>
        </Card.Meta>
        <Card.Description>
          {weather[0].main} - {weather[0].description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="thermometer" />
        {main.temp} °C
      </Card.Content>
    </Card>
  );
};
export default WeatherCard;
