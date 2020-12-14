import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import $ from 'jquery';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// window.addEventListener('load', () => {
//   const preload = document.querySelector('.preload')
//   preload.classList.add('preload-finish')
// })

const slider = (
  <AwesomeSlider>
    <div class="container-fluid">
      <div class='app'>
        <img id="avatar" src="./avatar.png"/>
        <h1>Hi, my name is Cheng Pham.</h1>
        <h1>I build things for the web.</h1>
        <p>
          I am a full-stack web developer and UI/UX javascript specialist
          based in Vancouver, BC. I specialize in designing websites and application.
          Check out projects on here to see my latest projects and live demos of the work I've done.
        </p>
      </div>
      
    </div>

    <div class="container-fluid">
      <div class='app'>
          <h1>My Portfolio</h1>
      </div>
    </div>

    <div class="container-fluid">
      <div class='app'>
          <h1>Contact Me</h1>
      </div>
    </div>
  </AwesomeSlider>
);
class App extends React.Component {
  constructor(props){
      super(props)
  }
  render(){
      return (
          <div id='main'>
            {slider}
            <div id='nav'>
              <nav>
                <ul>
                  <li><a href="http://chengpham.com"> <i class="fas fa-globe-americas"></i></a> </li>
                  <li><a href="http://github.com/chengpham"> <i class="fab fa-github"></i></a> </li>
                  <li><a href="http://linkedin.com/in/chengpham"> <i class="fab fa-linkedin-in"></i></a> </li>
                  <li><a href="#"> <i class="fas fa-at"></i></a> </li>
                </ul>
              </nav>
            </div>
            <div class="preload">
              <div class="loader"><img src="./avatar_head.png" /></div>
            </div>
          </div>
      )
  }
}
ReactDOM.render( <App />, document.getElementById('root'));

