// This file is render main index
// All components should be rendered here

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// Components css file
import './css/index.css';
import './css/page-layout.css';
import "./css/material-icons.css"
import './css/animate.min.css';   // animation CSS



// Import pages from other JSX files
import HomePage from './HomePage';
import CameraPage from './CameraPage';
import CalibratePage from './CalibratePage';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';

import reportWebVitals from './reportWebVitals';

// Electron interact APIs
const API = window.api




// listening events, if you're using the web broswer to debug
// please comment the API part
let changeIcon = false

API.receive("change-icon", ()=> {
  changeIcon = true
  document.getElementById("win-max").className = "winRestore"
  console.log(changeIcon)
})

API.receive("restore-icon", () => {
  changeIcon = false
  document.getElementById("win-max").className = "winMax"
  console.log(changeIcon)
})

class Container extends React.Component {
  render() {
      return (
        <div>
          <Titlebar />
          <div className="container" id="container">
            <Sidebar />
            <MainContent />
          </div>  
        </div>
      ); 
  }
} 


class Titlebar extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      className: "winMax",
    }
  }

  sendMinimize() {
    API.sendWinMinimizeSignal()
  }

  sendMaximize = (e)=> {
    API.sendWinMaximizeSignal()
  }

  sendClose() {
    API.sendWinCloseSignal()
  }
  
  render() {
    return(
      <div className="titlebar" id="titlebar">
        <div className="icon">icon</div>
        <div className="titleName"><p>Demo program</p></div>
        <div className="windowManage">
          <div className="winMin" id="win-min" onClick={this.sendMinimize}></div>
          <div className={this.state.className} id="win-max" 
          onClick={this.sendMaximize} 
          >
          </div>
          <div className="winClose" id="win-close" onClick={this.sendClose}></div>
        </div>
      </div>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar" id="sidebar">
        <SidebarMenu />
      </div>
    );
  }
}

class SidebarLabel extends React.Component {
  render() {
    return (
      <div className="sidebarLabel" id={this.props.labelId} title={this.props.labelTitle}>
        <span className="material-icons">{this.props.iconName}</span>
        <span>{this.props.labelText}</span>
      </div>
    );
  }
}

class SidebarMenu extends React.Component {
  render() {
    return(
      <div>
        <SidebarLabel labelId="home" 
                      labelTitle="Show home page" 
                      iconName="home" 
                      labelText="Home"/>
        <SidebarLabel labelId="cameraTest" 
                      labelTitle="Test your cameras" 
                      iconName="photo_camera" 
                      labelText="Camera"/>
        <SidebarLabel labelId="calibrate"
                      labelTitle="calibrate your camera"
                      iconName="filter_center_focus"
                      labelText="Calibrate"/>
         <SidebarLabel labelId="settings"
                      labelTitle="various of settings"
                      iconName="settings"
                      labelText="Settings"/>   
          <SidebarLabel labelId="about"
                      labelTitle="about this demo program"
                      iconName="feedback"
                      labelText="About"/>                         
      </div>
    );
  }
}


class MainContent extends React.Component {
  render(){
    return (
      <div className="container mainContent" id="mainContent"></div>
    );
  }
}


// Render the container
ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById("root")
)







/*
  Function: RenderMainContent
  Description: Render the page.
  TODO: Use NextJS routing pages.
*/
function RenderMainContent(){
  const homeLabel = document.getElementById("home")
  const cameraTestLabel = document.getElementById("cameraTest")
  const calibrateLabel = document.getElementById("calibrate")
  const settingsLabel = document.getElementById("settings")
  const aboutLabel = document.getElementById("about")

 // Default page 
  ReactDOM.render(
    <HomePage />
  ,
  document.getElementById("mainContent")
  )

  homeLabel.addEventListener('click',()=>{
    RenderPage(<HomePage />)
  })
  cameraTestLabel.addEventListener('click',()=>{
    RenderPage(<CameraPage />)
  })
  calibrateLabel.addEventListener('click',()=>{
    RenderPage(<CalibratePage />)
  })
  settingsLabel.addEventListener('click',()=>{
    RenderPage(<SettingsPage />)
  })
  aboutLabel.addEventListener('click',()=>{
    RenderPage(<AboutPage />)
  })
}

/*
 Function: RenderPage
 Description: select the page to render
*/
function RenderPage(pageName){
  ReactDOM.render(pageName
    ,document.getElementById("mainContent")
  )
}

// Render the page via sidebar buttons
RenderMainContent()



reportWebVitals();
