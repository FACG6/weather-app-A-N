import React from 'react';

const Weatherweek = (props) => {
  // console.log(props.temp);
  return (
    <div className="Weatherweek">
      <div>avghumidity : {props.temp.day.avghumidity}</div>
      <div>avgtemp_c : {props.temp.day.avgtemp_c}</div>
      <div>avgtemp_f : {props.temp.day.avgtemp_f}</div>
      <div>maxwind_kph : {props.temp.day.maxwind_kph}</div>
      <br />
      <div className='line'>_______________________________</div>
    </div>
  );
}

export default Weatherweek;
