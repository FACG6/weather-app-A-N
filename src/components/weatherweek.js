import React from 'react';
import './style.css';

const Weatherweek = (props) => {
  return (
    <div className="Weatherweek">

      <div className='infoforweek'>
        date : <span>{props.temp.date}</span>
        <span><img src={props.temp.day.condition.icon} /></span>
      </div>
      <div className='infoforweek'>
        Temperature in celsius (avg) : <span>{props.temp.day.avgtemp_c}</span>
      </div>

      <div className='infoforweek'>
        Wind speed in kilometer per hour : <span>{props.temp.day.maxwind_kph}</span>
      </div>

      <div className='infoforweek'>
        Weather text : <span>" {props.temp.day.condition.text} "</span>
      </div>

      <div className='infoforweek'>
        Total precipitation in milimeter : <span>{props.temp.day.totalprecip_mm}</span>
      </div>

      <div className='infoforweek'>
        Average visibility in kilometer : <span>{props.temp.day.avgvis_km}</span>
      </div>

      <div className='infoforweek'>
        Average humidity as percentage : <span>{props.temp.day.avghumidity}</span>
      </div>

    </div>
  );
}

export default Weatherweek;
