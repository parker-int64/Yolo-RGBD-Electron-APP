// about page
import React from 'react';
import "./css/page-layout.css"
import "./css/about-page.css"

// Some png file
import reactLogo from "./css/png/reactjs.png"
import electronLogo from "./css/png/electronjs.png"
import ocvLogo from './css/png/opencv.png';
import cudaLogo from './css/png/cuda.png';
import oclLogo from './css/png/opencl.png';
import ompLogo from './css/png/omp.png';

const shell = window.shell


export default class AboutPage extends React.Component {
    render(){
        return(
            <div className="rowView">
                <div className="aboutContent">About</div>
                <RowView1/>
            </div>
            

        );
    }
}



/*
  TODO: migth need sligt change in electron
*/
class RowView1 extends React.Component {
    render(){
      return(
        <div className="rowView">
          <span>Made with love and following tools</span>
          <div className="logoPNG" style={{width: "480px"}}>
                <img src={reactLogo}  title="Reactjs" alt="react" width="48px" height="48px"/>
                <img src={electronLogo}  title="Electronjs" alt="electron" width="48px" height="48px"/>
                <img src={ocvLogo}  title="OpenCV" alt="opencv" width="48px" height="48px"/>
                <img src={cudaLogo} title="NVIDIA CUDA"  alt="cuda" width="48px" height="48px"/>
                <img src={oclLogo} title="OpenCL" alt="opencl" width="48px" height="48px"/>
                <img src={ompLogo}  title="OpenMP" alt="openmp" width="96px" height="36px"/>
          </div>
        </div>
        
      );
    }
}