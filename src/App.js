// import React from 'react';
import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {

  
  constructor(props) {
    super(props);
    
  
    this.state = {
      postId: ""
    }
  }

  componentDidMount(){
    let params = {
      "projectId": "our-project-123",
      "name": "my project",
      "labels": {
        "mylabel": "prod"
      }
  }
  const auth_key = process.env.REACT_APP_AUTH_KEY;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': auth_key },
    body: JSON.stringify(params)
};
fetch('https://cloudresourcemanager.googleapis.com/v1/projects/', requestOptions)
    .then(response => response.json())
    .then(data => this.setState({ postId: data.id }));

    console.log(this.state.postId);
    // console.log(auth_key);

}
  render () {
    return (
      <div>
      <div>Please create a new project:</div>
      projectId <input type="text"></input>
      </div>
    );
  }
  




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


};

  