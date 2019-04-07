import React, { Component } from 'react';
import Weatherweek from './components/weatherweek';
import Fetch from './components/fetch';
import Navbar from './components/navbar'
import Weatherday from './components/weatherday';
import './App.css';

class App extends Component {

  state = {
    forecastday: null,
    status: false,
    day: 'false',
    city: null,
    error: null,
  }

  componentDidMount() {
    Fetch('gaza stript').then(res => {
      if (res) {
        this.setState({ forecastday: res.forecast.forecastday });
      } else {
        this.setState({ error: 'enter valid country or city' });
      }
    }).catch(err => console.log(err));
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
    Fetch(city).then(data => {
      if (data) {
        this.setState({ forecastday: data.forecast.forecastday });
      } else {
        this.setState({ error: 'enter valid country or city' });
      }
    })
  }

  render() {

    if (!this.state.forecastday) {
      return <div className='loading'>loading..</div>
    }
    if (this.state.error) {
      return <div>bad request</div>
    }
    return (
      <div className="App">
        <Navbar />
        <div className='form'>
          <div className='filed'>
            <input placeholder='Search...' className='search' type='text' onChange={this.onChange} />
            <input className='btnsearch' type='submit' value='search' onClick={this.handleSearch} />
          </div>
          <div className='day-week'>
            <input className='btnday' type='submit' onClick={this.updateStatus} value='this day' />
            <input className='btnweek' type='submit' onClick={this.updateStatusWeek} value='this week' />
          </div>
        </div>

        {this.state.status ?
          <Weatherday weatherforday={this.state.forecastday}/> :

          <div className='thisweek'>
            {this.state.forecastday.map(t => <Weatherweek temp={t} />)}
          </div>
        }

      </div>
    );
  }
}

export default App;
