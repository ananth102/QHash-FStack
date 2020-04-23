import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

function Person(props){
    let like = <Button id="sgn" variant="contained"onClick={props.like}> Like </Button>
    let superLike = <Button id="sgn" variant="contained"onClick={props.superlike}> superLike </Button>
    let img = <img>{this.props.image}</img>
    let name = props.name;
return <div>{img}{name}{like}{superLike}</div>  
}

export default Person;