import React, { Component } from 'react';
import './App.css';
import Search from './components/search/search';
import Weather from './components/weather/weather';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const key = '98dfcf51a6c3a35d5123dd58875f8c45';
class App extends Component {
  state = {
    current:{
    tempreture : '',
    pressure:'',
    humidity:'',
    speedw:'',
    degw:'',
    description:'',
  },
  error :'',
  enable:false,
  whoclick:true,
  }

  getweather = async(e) =>{
    e.preventDefault();
    const city = e.target.parentElement.elements[0].value;
  
    if(city){
     const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
     const data =await api.json();
     //console.log(data);
      this.setState({current:{tempreture : data.main.temp,
        pressure : data.main.pressure,
        humidity:data.main.humidity,
        speedw:data.wind.speed,
        degw:data.wind.deg,
        description: data.weather[0].description,
       
      }, error :'',});
    }
    else{
      this.setState({current:{ tempreture : '',
      pressure:'',
      humidity:'',
      speedw:'',
      degw:'',
      description:'',
    },
    error :'please enter city name',
   });
    }
  }

 
  render() {
    return (
      <div className="App">
      <Nav />
       <Search getWeather = {this.getweather} enableInput={this.state.enable} />
       <Weather current = {this.state.current} error = {this.state.error} whoclick = {this.state.whoclick}  />
       <Footer />
      </div>
    );
  }
}

export default App;
