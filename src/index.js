import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './contact';

const social = (
  <div>
  <nav>
    <ul>
      <li><a href="http://chengpham.com"> <i className="fas fa-globe-americas" /></a> </li>
      <li><a href="http://github.com/chengpham"> <i className="fab fa-github" /></a> </li>
      <li><a href="http://linkedin.com/in/chengpham"> <i className="fab fa-linkedin-in" /></a> </li>
      <li><a href="mailto:chengpham@gmail.com"> <i className="fas fa-at" /></a> </li>
    </ul>
  </nav>
  </div>
)
const preloader = (
  <div id="preload">
    <div id="loader"><img src="avatar_head.png" alt='avatar'/></div>
  </div>
)

const slider = (
  <AwesomeSlider>
      <div className='app'>
        <h1>Hi, my name is Cheng Pham.</h1>
        <p>
          I build things for the web.
          I am a full-stack web developer and UI/UX javascript specialist
          based in Vancouver, BC. I specialize in designing websites and application.
          Come check out my latest projects and live demos of the work I've done.
        </p>
      </div>

      <div className='app'>
          <h1>About Me</h1>
          <div>
          <p>
          Hi, my name is Cheng and I am a software developer who recently graduated from CodeCore. I have always enjoyed building things, whether in the digital or physical realm. 
          </p>
          
          <p>Skills</p>
          <p>Programming Languages</p>
          <p>TypeScript , JavaScript ES6 , HTML, (S)CSS , Ruby, SQL, Matlab</p>

          <p>Frameworks & Libraries
          React , Redux, Next.js , Jest, Node.js, Express, Rails, JQuery</p>

          <p>Tools & Platforms
          Github, Firebase , Vercel, DatoCMS, Wordpress, Asana, Jira</p>

          <p>Graphics & Design (Mechanical + Web)
          Catia V5 , After Effects, Premiere, Photoshop, Figma</p>
          </div>
      </div>


      <div className='app'>
          <h1>Portfolio</h1><br/> <h4>Wheel Spinner</h4>
          <p><a href="https://chengs-wheel-spinner.herokuapp.com"><img src="wheel.png" width='400px' alt='wheel spinner'/></a></p>
      </div>

      <div className='app'>
        <h1>Contact Me</h1>
        <ContactForm/>
      </div>
  </AwesomeSlider>
);

class App extends React.Component {
  render(){
      return (
          <div>
            {social}
            {slider}
           
          </div>
      )
  }
}
ReactDOM.render( <App />, document.getElementById('root'));

