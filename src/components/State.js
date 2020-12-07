import React, { Component, useState } from "react";
import City from "./City";
function State(props){
    const state = props.state;
    const[city, setCity]=useState(false);
    
    return(
        <li><span id={"state"+(props.idx+1)} onClick={()=>setCity(!city)}>
            {state.name}</span>
            <ul>{city?
                state.cities.map((city, index) => (
                    <City key={city.name+city.key} idx={index} city={city}/>
                ))
            :null}</ul>
        </li>
    )
}
export default State;