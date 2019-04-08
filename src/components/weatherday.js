import React from 'react'
const Weatherday = (props) => {

  return (
    <div className='thisDay'>
      <div className='infoforday'>
        date : <span>{props.weatherforday[0].date}<span><img src={props.weatherforday[0].day.condition.icon} /></span>
        </span>
      </div>

      <div className='infoforday'>
        Temperature in celsius (avg) : <span>{props.weatherforday[0].day.avgtemp_c}</span>
      </div>

      <div className='infoforday'>
        Temperature in celsius (max): <span>{props.weatherforday[0].day.maxtemp_c}</span>
      </div>

      <div className='infoforday'>
        Temperature in celsius (min) : <span>{props.weatherforday[0].day.mintemp_c}</span>
      </div>

      <div className='infoforday'>
        Total precipitation in milimeter : <span>{props.weatherforday[0].day.totalprecip_mm}</span>
      </div>

      <div className='infoforday'>
        Average visibility in kilometer : <span>{props.weatherforday[0].day.avgvis_km}</span>
      </div>

      <div className='infoforday'>
        Average humidity as percentage : <span>{props.weatherforday[0].day.avghumidity}</span>
      </div>

    </div>
  )
}

export default Weatherday;
