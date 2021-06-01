import React, {useState} from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../stylesheets/App.scss';


const LineItem = props => {

    //just trying things out
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return(
        <Link
            className="collapsible-line-item flex-row"
            to={props.projectUrl} > 
            {props.projectName}
        </Link>
    )
}

const CollapsibleFrame = props => {
    const [collapse, setCollapse] = useState(false);

    const items = [];

    if(props.projectUrls) {
        props.projectUrls.map((project) => (
            items.push(<LineItem projectUrl={project.url} projectName={project.title} />)   
        ))
    }

    return(
        <div className="flex-column cert-frame">
            <div id="fccNodeCert" onClick={() => setCollapse(!collapse)} className="cert-header flex-row">
                <a 
                    target='_blank'
                    href={props.certLink}
                    className='cert-icon'
                > 
                    <i className={props.icon}></i>
                </a>
                <a 
                    href={props.certLink}
                    className='cert-name'
                >
                    {props.title}
                </a>
                <button id="fccNodeCert" onClick={() => setCollapse(!collapse)} className='collapse-btn'>
                    {collapse === false
                        ? <i className="fas fa-caret-right fa-2x"></i>
                        : <i className="fas fa-caret-down fa-2x"></i>}
                </button>
            </div> 
            <div 
                className={collapse ? 'cert-body show': 'cert-body hide'}
            >
                {items}
            </div>
        </div> 
    )
}

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
            console.error("The Collapsible is out of service. Please try again later. ")
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
                                <a target="_blank" href="https://github.com/yeahyouknowme/portfolio-site">
                                    <i className="id-icon fab fa-github-square fa-3x"></i>
                                </a>
                                <a target="_blank" href="https://www.freecodecamp.org/yeahyouknowme">
                                    <i className="id-icon fab fa-free-code-camp fa-3x"></i>
                                </a>
                            </div>
                        </div>
                </div>
                <div className="splash-body flex-row">
                    <div className="cert-content flex-column">
                        <CollapsibleFrame
                            title="Javascript Certificate"
                            icon="fab fa-free-code-camp fa-2x"
                            certLink="https://www.freecodecamp.org/certification/yeahyouknowme/javascript-algorithms-and-data-structures"
                        />
                        <CollapsibleFrame
                            projectUrls={
                                [
                                    {title: 'Random Quote Machine', url: '/quotes'},
                                    {title: 'Markdown Previewer', url: '/markdown-editor'},
                                    {title: 'Drum Machine', url: '/drum-machine'},
                                    {title: 'Calculator', url: '/calculator'},
                                    {title: 'Countdown Timer', url: '/timer'}
                                ]
                            }
                            title="Front End Libraries Certificate"
                            icon="fab fa-free-code-camp fa-2x"
                            certLink="https://www.freecodecamp.org/certification/yeahyouknowme/front-end-libraries"
                        />
                        <CollapsibleFrame
                            title="API & Microservices Certificate" 
                            icon="fab fa-free-code-camp fa-2x"
                            certLink="https://www.freecodecamp.org/certification/yeahyouknowme/apis-and-microservices"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;