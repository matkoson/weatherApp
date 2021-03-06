import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name,
    temps = cityData.list.map((weather)=>weather.main.temp),
    humid = cityData.list.map((weather)=>weather.main.humidity),
    press = cityData.list.map((weather)=>weather.main.pressure),
    {lon, lat} = cityData.city.coord;

    return(
    <tr key={name}>
      <td><GoogleMap lat={lat} lon={lon}/></td>
      <td><Chart data={temps} color="red" units="K" /></td>
      <td><Chart data={press} color="green" units="hPa" /></td>
      <td><Chart data={humid} color="blue" units="%" /></td>
    </tr>
  );

  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}
function mapStateToProps({weather}) {
  console.log(weather);
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
