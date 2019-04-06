
import React from 'react';

const Search = (props) => {
    return(
        <form>
        <input type = 'text' placeholder = 'enter city'  name = 'city'/>
        {props.enableInput? <input type = 'text' placeholder = 'enter code' name = 'code'/>:''}
        <button className = 'current' onClick = {props.getWeather}>get current</button>
        <button className = 'week' onClick = {props.getWeeak}>get week</button>
    </form>
    );
}
export default Search;
