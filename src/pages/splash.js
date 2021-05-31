import React from 'react';
import {Image, Row, Col, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Splash extends React.Component{
    constructor(props){
        super(props);

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
                                <a href="https://github.com/yeahyouknowme/fcc-projects">
                                    <i class="id-icon fab fa-github-square fa-3x"></i>
                                </a>

                                <a href="https://www.freecodecamp.org/yeahyouknowme">
                                    <i class="id-icon fab fa-free-code-camp fa-3x"></i>
                                </a>
                            </div>
                        </div>
                </div>
                <div className="splash-body flex-row">

                </div>
            </div>
        )
    }
}

export default Splash;