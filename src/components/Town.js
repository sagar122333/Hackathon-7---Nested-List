import React, { Component, useState } from "react";

function Town(props){
    const town = props.town;
    
    return(
        <li id={"town"+town.idx}>{town.name}</li>
    )
}
export default Town;