import './App.css';

// icons
import email from './icons/email.png'
import linkedin from './icons/linkedin.png'
import facebook from './icons/facebook.png'
// components

export default function App() {
  return (

   
    <div className="app">
      <div className="about-container container">
        <div className="name-row about-items">
          <h1>Erica,</h1>
          <h2>Web Developer</h2>
        </div>        
        <div className="about-row about-items">
          <p className="p-txt">Hi! I'm Erica and I'm a web developer. I enjoy creating websites that are pretty and effective! This page will give you access to all of the projects that I have done so far. I can work with the following tools:
          </p>
        </div>        
        <div className="skills-row about-items">
          <h2 className="skills-txt">
            HTML CSS BOOTSTRAP JAVASCRIPT NODEJS EXPRESSJS MONGODB REACTJS
          </h2>
        </div>
      </div>

      <div className="project-container container">
        <div className="centered-row">
            <div className="span-wrapper">
              <span className="span-top">These buttons will direct you to my projects:</span>
              <span className="span-note">(Please note that some of the components of these websites may take a while to load)</span>
            </div>

            <div className="button-wrapper wrapper">
                <a href="https://zuitt-final-project.vercel.app/"><button>E-Commerce Site</button></a>
                <a href="https://ericxmae.github.io/web-portfolio/"><button className="button-slide">Static Site</button></a>
            </div>
            <span className="span-bottom"></span>
            <div className="socials-wrapper wrapper">
              <a href="mailto:ericamaeefajardo@gmail.com"><img src={email} alt="email-icon"/></a>
              <a href="https://www.facebook.com/ericamae.fajardo.90/"><img src={facebook} alt="facebook-icon"/></a>
              <a href="https://www.linkedin.com/in/erica-mae-fajardo-3b6a56252/"><img src={linkedin} alt="linkedin-icon"/></a>
            </div>
        </div>
      </div>


    </div>

  );
}


