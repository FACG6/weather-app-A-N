
import React from 'react';

const Weather = (props) => {
    console.log(props.days)
    if(props.whoclick){
    return(
         <div>
            {props.current.tempreture && <p>tempreture: {props.current.tempreture}</p>}
            {props.current.pressure && <p>pressure: {props.current.pressure}</p>}
            {props.current.humidity && <p>humidity: {props.current.humidity}</p>}
            {props.current.speedw && <p>speedw: {props.current.speedw}</p>}
            {props.current.degw && <p>degw: {props.current.degw}</p>}
            {props.current.description && <p>description: {props.current.description}</p>}
            {props.error && <p>error: {props.error}</p>}
        </div>  
    );
    }
    else{
       
    }
    
    
     
    
}
export default Weather;
