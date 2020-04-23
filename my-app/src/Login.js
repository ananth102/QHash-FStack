import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
function Login(props){
    let username = <TextField
    id={"user"}
    onChange={props.onChange}
    label={"username"}
    variant="outlined"
  ></TextField>;
  let password = <TextField
    id={"pass"}
    onChange={props.onChange}
    label={"password"}
    variant="outlined"
  ></TextField>;
  let lgn_bttn = <Button id="brs" variant="contained"
onClick={props.onClick}
>Login!</Button>;
let sgn_bttn = <Button id="sgn" variant="contained"
 onClick={props.onClick}
> Sign up! </Button>

  
return <div>{username}{password}{lgn_bttn}{sgn_bttn}</div>
}
export default Login;