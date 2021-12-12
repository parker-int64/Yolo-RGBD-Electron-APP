import React, { StrictMode } from 'react';
import "./css/home-page.css";



export default class HomePage extends React.Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignContent:'center'}}>
                <RowView1 rowHeight="30vh" justifyContent="center" />
                <RowView2 rowHeight="60vh" display="flex" 
                flexDirection="row" justifyContent="center" alignItems="flex-start"/>
            </div>
        );
    }
}

class RowView1 extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            quote: "Welcome!",

        }
      }

    // Click function
    changeQuote(){
        this.setState({
            quote: getQuote(),
        })
    }
    render(){
        return(
            <div className="rowView" style={{height: this.props.rowHeight, justifyContent: this.props.justifyContent}}>
                <p className="quoteText" onClick={this.changeQuote.bind(this)}>{this.state.quote}</p>
            </div>
        );
    }
}

class RowView2 extends React.Component {
    render(){
        return(
            <div className="rowView" style={{height: this.props.rowHeight,
                display:this.props.display, 
                flexDirection:this.props.flexDirection,
            justifyContent: this.props.justifyContent,
            alignItems: this.props.alignItems}}>
                <PageButtons id="get-started" materialText="add_box" buttonText="Get Started" />
                <PageButtons id="documents" materialText="description" buttonText="Documents" />
                <PageButtons id="search" materialText="search" buttonText="Search" />
            </div>
        )
    }
}




// little components here
class PageButtons extends React.Component{
    render(){
        return(
            <div>
            <div className="homepageButtons" id={this.props.buttonId}>
                <span className="material-icons" style={{fontSize:'32px'}}>{this.props.materialText}</span>
                <span style={{fontFamily:'Open Sans'}}>{this.props.buttonText}</span>
            </div>
        </div>
        );
    }
}

function getQuote() {
    var quoteArr = [
        '远看山有色',
        '近听水无声',
        '春去花还在',
        '人来鸟不惊',
        "横看成岭侧成峰",
        "远近高低各不同",
        "不识庐山真面目",
        "只缘身在此山中",
        "没有啦~",
        "真没有啦~"
    ] // add some words
    let num = Math.random() * 10
    return quoteArr[Math.floor(num)] // choose one of them...
}
