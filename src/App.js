//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Singin from './SingForm/Singin';
//import Clarifai from 'clarifai';

import Navication from './component/Navication/Navication';
import Logo from './component/Logo/Logo';
import ImageLinkFrom from './component/ImageLinkFrom/ImageLinkFrom';
import Rank from './component/Rank/Rank';
import Register from './Register/Register';
import { Component } from 'react';

//import Particles from 'react-particles-js';
//const app = new Clarifai.App({
  //apiKey: 'cc4ce255ff614aef8b33f694dc211e50'
//});

//const app = new Clarifai.App({
//apiKey: 'cc4ce255ff614aef8b33f694dc211e50'
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',

      box: {},
      route: 'signin',
      isSigendIn: false
    }
  }
  onInputChange = (event) => {
    console.log(event);
  }
  onButtonSubmit = () => {
    console.log('click');
    /*app.models
      .predict(
        "fe995da8cb73490f8556416ecf25cea3",
        "https://samples.clarifai.com/face-det.jpg")
      .then(
        function (response) {
          console.log(response)
        },
        function (err) {
          console.log(err)
        }
      )*/
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSigendIn: false })
    } else if (route === 'home') {
      this.setState({ isSigendIn: true })

    }

    this.setState({ route: route })
  }

  render() {
    const { isSigendIn, route } = this.state
    return (
      <div className="App">


        <Navication isSigendIn={isSigendIn} onRouteChange={this.onRouteChange}></Navication>
        {route === "home"
          ? <div>
            <Logo></Logo>
            <Rank></Rank>
            <ImageLinkFrom
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
          </div>
          : (
            this.state.route === 'signin'
              ? <Singin onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
          )
 }
      </div>
    );
  }
}
export default App;
