import React from 'react';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import './Login'
import Login from './Login';
import axios from 'axios';
import ImageUploader from 'react-images-upload';


function App() {
  const [form,formupdate] = useState({user:"",pass:""});
  const [userState,userStateUpdate] = useState(0);
  const [currUser,currUserUpdate] = useState("");
  const [userList,updateUserList] = useState([]);
  //console.log(users)
  if (userState ==0){
    return (
      <div className="App">
        <Login meow="woof" onChange={onChange} onClick={sendUserpass}/>
        
      </div>
    );
  }else if(userState == 1){
    return <ImageUploader
    withIcon={true}
    buttonText='Choose images'
    onChange={onDrop}
    imgExtension={['.jpg', '.gif', '.png', '.gif']}
    maxFileSize={5242880}
/>
  }
  return <p>Dating App</p>
  
  function onChange(element) {
    let str = element.target.id;
    if (form[str] != undefined) {
      let formm = form;
      formm[str] = element.target.value;
      formupdate(formm);
    }
    //str = str.substring(0, 10);
    console.log(form);
  };
  function sendUserpass(){
    //send to server - fetch user data + list
    
    //req = {login,}
    axios.post("localhost:9000/login",{username:form.user,password:form.pass}).then(res =>{
      updateUserList(res.data.lst);
    });
    //wait for response
    let auth = true;
    let newUser = true;
    //if auth then sign in
    if (auth && newUser){userStateUpdate(1);currUserUpdate(form.user)}
    if (auth && !newUser){userStateUpdate(2);currUserUpdate(form.user)}
    //else F
  }
  function onDrop(picture){
    userStateUpdate(2)
  }
  function like(likeduser){
    axios.post("localhost:9000/like",{user:currUser,likeduser:likeduser,superlike:false}).then(res =>{
     // updateUserList(res.data.lst);
    });
  }
  function superlike(){
    axios.post("localhost:9000/like",{user:currUser,likeduser:likeduser,superlike:true}).then(res =>{
      updateUserList(res.data.lst);
    });
  }
}


export default App;
