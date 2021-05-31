import React from 'react';
import {Image, Row, Col, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fccJSCert: 'hide',
            fccReactCert: 'hide',
            fccNodeCert: 'hide',
            aPlusCert: 'hide'
        }
        this.ToggleCollapsible = this.ToggleCollapsible.bind(this);
    }

    ToggleCollapsible(e){
        // The button in each collapsible needs 
        // an ID corresponding to the relevant state        
        let target = e.target.id;
        let collapsible = this.state[target];

        if(collapsible === 'hide'){
            this.setState({[target]: 'show'})
        }
        else if(collapsible === 'show'){
            this.setState({[target]: 'hide'})
        }
        else{
            console.error("The Collaspible is out of service. Please try again later. ")
        }
    }

    render() {
        return(
            <div className="splash-content flex-column normal-text">
                <div className="splash-identity flex-row">
                        <div className="id-pfp">
                            <Image src="https://avatars.githubusercontent.com/u/25336236?v=4" roundedCircle="true" className="pfp-image" />
                        </div>
                        <div className="id-content flex-column">
                            <div className="id-name">
                                <h1><strong>Yeahyouknowme</strong></h1>
                            </div>
                            <div className="id-icon-row flex-row">
                                <a className="id-email" href="mailto:forrest.webdev@gmail.com">
                                    forrest.webdev@gmail.com
                                </a>
                                <a href="https://github.com/yeahyouknowme/portfolio-site">
                                    <i className="id-icon fab fa-github-square fa-3x"></i>
                                </a>
                                <a href="https://www.freecodecamp.org/yeahyouknowme">
                                    <i className="id-icon fab fa-free-code-camp fa-3x"></i>
                                </a>
                            </div>
                        </div>
                </div>
                <div className="splash-body flex-row">
                    <div className="cert-content flex-column">
                    {/* COMPTIA A+ CERT */}
                        <div className="flex-column cert-frame">
                            <a href className="cert-header a-plus flex-row">
                                <a 
                                    target='_blank'
                                    href="#"
                                    className='cert-icon-generic'
                                > 
                                    <i className="fas fa-certificate fa-2x"></i>
                                </a>
                                <div className='cert-name a-plus-name'>
                                    Comptia A+ Certificate
                                </div>
                            </a> 
                        </div> 
                    {/* FCC JAVASCRIPT CERT AND PROJECTS*/}
                        <div className="flex-column cert-frame">
                            <div id="fccJSCert" onClick={this.ToggleCollapsible} className="cert-header flex-row">
                                <a 
                                    target='_blank'
                                    href="https://www.freecodecamp.org/certification/yeahyouknowme/javascript-algorithms-and-data-structures" 
                                    className='cert-icon'
                                > 
                                    <i className="fab fa-free-code-camp fa-2x"></i>
                                </a>
                                <div className='cert-name'>
                                    JavaScript Certificate
                                </div>
                                <button id="fccJSCert" onClick={this.ToggleCollapsible} className='collapse-btn'>
                                    {this.state.fccJSCert === 'hide'
                                        ? <i className="fas fa-caret-right fa-2x"></i>
                                        : <i className="fas fa-caret-down fa-2x"></i>}
                                </button>
                            </div> 
                            <div className={"cert-body " + this.state.fccJSCert}>
                                    ...content
                            </div>
                        </div> 
                        {/* FCC REACT CERT AND PROJECTS */}
                        <div className="flex-column cert-frame">
                            <div id="fccReactCert" onClick={this.ToggleCollapsible} className="cert-header flex-row">
                                <a 
                                    target='_blank'
                                    href="https://www.freecodecamp.org/certification/yeahyouknowme/javascript-algorithms-and-data-structureshttps://www.freecodecamp.org/certification/yeahyouknowme/front-end-libraries" 
                                    className='cert-icon'
                                > 
                                    <i className="fab fa-free-code-camp fa-2x"></i>
                                </a>
                                <div className='cert-name'>
                                    Front End Libraries Certificate
                                </div>
                                <button id="fccReactCert" onClick={this.ToggleCollapsible} className='collapse-btn'>
                                    {this.state.fccReactCert === 'hide'
                                        ? <i className="fas fa-caret-right fa-2x"></i>
                                        : <i className="fas fa-caret-down fa-2x"></i>}
                                </button>
                            </div> 
                            <div className={"cert-body " + this.state.fccReactCert}>
                                    ...content
                            </div>
                        </div> 
                        {/* APIs & MICROSERVICES CERT AND PROJECTS */}
                        <div className="flex-column cert-frame">
                            <div id="fccNodeCert" onClick={this.ToggleCollapsible} className="cert-header flex-row">
                                <a 
                                    target='_blank'
                                    href="https://www.freecodecamp.org/certification/yeahyouknowme/javascript-algorithms-and-data-structureshttps://www.freecodecamp.org/certification/yeahyouknowme/front-end-libraries" 
                                    className='cert-icon'
                                > 
                                    <i className="fab fa-free-code-camp fa-2x"></i>
                                </a>
                                <div className='cert-name'>
                                    API & Microservice Certificate
                                </div>
                                <button id="fccNodeCert" onClick={this.ToggleCollapsible} className='collapse-btn'>
                                    {this.state.fccNodeCert === 'hide'
                                        ? <i className="fas fa-caret-right fa-2x"></i>
                                        : <i className="fas fa-caret-down fa-2x"></i>}
                                </button>
                            </div> 
                            <div className={"cert-body " + this.state.fccNodeCert}>
                                    ...content
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;