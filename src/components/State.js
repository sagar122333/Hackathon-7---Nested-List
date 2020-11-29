import React, { Component, useState } from "react";
import City from "./city";
function State(props){
    const state = props.state;
    const[city, setCity]=useState(false);
    
    return(
        <li id={"state"+(props.idx+1)} onClick={()=>setCity(true)}>
            {state.name}
            <ul>{city?
                state.cities.map((city, index) => (
                    <City key={city.name+city.key} idx={index} city={city}/>
                ))
            :null}</ul>
        </li>
    )
}
export default State;