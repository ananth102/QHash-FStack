import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./Person"

function PersonList(props){
    let pList = [];
    for(let i=0;i<props.arr.length;i++){
        pList.push(<Person like={props.like} superlike={props.superlike} img={props.arr[i].img} 
        name ={props.arr[i].name}
        />);
    }
    return pList;
}
export default PersonList;