import React, { Component, useState } from "react";

function Town(props){
    const town = props.town;
    
    return(
        <li id={"town"+(props.idx+1)}>{town.name}</li>
    )
}
export default Town;