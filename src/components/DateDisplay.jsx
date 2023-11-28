import moment from "moment";

function DateDisplay({ timestamp }) {
  const date = moment(timestamp * 1000).format("MMMM Do YYYY, h:mm:ss a");

  return <span className="date">{date}</span>;
}
export default DateDisplay;
