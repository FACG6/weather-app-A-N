import React, { Component } from 'react';
import Weatherweek from './components/weatherweek';
import Fetch from './components/fetch';

import './App.css';

class App extends Component {

  state = {
    forecastday: null,
    status: false,
    day: 'false',
    city: null,
  }

  componentDidMount() {
    Fetch('gaza stript').then(data => {
      this.setState({ forecastday: data.forecast.forecastday });
    })
  }

  updateStatus = () => {
    this.setState({ status: true })
    console.log(this.state.status);
  }
  updateStatusWeek = () => {
    this.setState({ status: false })
    console.log(this.state.status);
  }

  onChange = (event) => {
    this.setState({ city: event.target.value });
  }
  handleSearch = () => {
    const { city } = this.state;
    Fetch(city).then(data =>
      this.setState({ forecastday: data.forecast.forecastday }));
  }
  render() {

    if (!this.state.forecastday) {
      return <div>loading..</div>
    }
    return (
      <div className="App">
        <div className='form'>
          <input className='search' type='text' onChange={this.onChange} />
          <input className='btnday' type='submit' onClick={this.updateStatus} value='this day' />
          <input className='btnweek' type='submit' onClick={this.updateStatusWeek} value='this week' />
          <input className='btnsearch' type='submit' value='search' onClick={this.handleSearch} />
        </div>

        {this.state.status ? <div className='thisDay'>
          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.avghumidity}
          </div>

          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.avgtemp_c}
          </div>

          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.avgtemp_f}
          </div>

          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.avgvis_km}
          </div>

          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.maxwind_mph}
          </div>

        </div> :
          <div className='thisweek'> this week
          {this.state.forecastday.map(t => <Weatherweek temp={t} />)}

          </div>
        }

      </div>
    );
  }
}

export default App;