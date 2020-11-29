import React, { Component, useState } from "react";
import Town from "./Town";
function City(props){
    const city = props.city;
    const[town, setTown]=useState(false);
    
    return(
        <li id={"city"+(props.idx+1)} onClick={()=>setTown(true)}>
            {city.name}
            <ul>{town?
                city.towns.map((town, index) => (
                    <Town key={town.name+town.key} idx={index} town={town}/>
                ))
            :null}</ul>
        </li>
    )
}
export default City;