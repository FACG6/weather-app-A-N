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
    city: null,
    error: false,
  }

  componentDidMount() {
    Fetch('gaza strip').then(res => {
      if (res) {
        this.setState({ forecastday: res.forecast.forecastday });
      } else {
        this.setState({ error: true });
      }
    }).catch(err => console.log(err));
  }

  updateStatus = () => {
    this.setState({ status: true })
  }
  updateStatusWeek = () => {
    this.setState({ status: false })
  }

  onChange = (event) => {
    this.setState({ city: event.target.value });
    this.setState({ error: false })
  }

  handleSearch = () => {
    const { city } = this.state;
    Fetch(city).then(data => {
      if (data) {
        this.setState({ forecastday: data.forecast.forecastday });
      } else {
        this.setState({ error: true });
      }
    })
  }

  render() {

    if (!this.state.forecastday) {
      return <div className='loading'>loading..</div>
    }
    return (
      <div className="App">
        <Navbar />
        <div className='form'>
          <div className='filed'>
            <input placeholder='Search...' className='search' type='text' onChange={this.onChange} />
            <a className='btnsearch' onClick={this.handleSearch}><i className="fas fa-search"></i></a>
          </div>

          <div className='day-week'>
            <input className='btnday' type='submit' onClick={this.updateStatus} value='this day' />
            <input className='btnweek' type='submit' onClick={this.updateStatusWeek} value='this week' />
          </div>
        </div>

        <div className='msguser'>{this.state.error ? <div className='msgerror' >The city doesn't exist <i class="far fa-frown"></i> please, enter valid city</div> : this.state.status ?
          <Weatherday weatherforday={this.state.forecastday} /> :

          <div className='thisweek'>
            {this.state.forecastday.map(t => <Weatherweek temp={t} />)}
          </div>}</div>
      </div>
    );
  }
}

export default App;
