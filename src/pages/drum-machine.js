import React from 'react';
import {Row, Col, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
	},
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	
	playSound() {
		const sound = document.getElementById(this.props.keyTrigger);
		sound.currentTime = 0;
		sound.play();
		this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
	}
	
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}
	
	handleKeyPress(e) {
		e.preventDefault();
		if (e.keyCode === this.props.keyCode) {
			this.playSound();
		};
	}
	
	render() {
		return(
			<div
				className='drum-pad'
				id={this.props.clipId}
				onClick={this.playSound}
				>
				<audio
					className='clip'
					id={this.props.keyTrigger}
					src={this.props.clip}
				/>
				{this.props.keyTrigger}
			</div>
		)
	}
}

class DrumMachine extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			display: String.fromCharCode(160),
			currentPadBank: bankOne
		};
		this.displayClipName = this.displayClipName.bind(this);
	}
	
	displayClipName(name) {
		this.setState({display: name})
	}

    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;
		script.id = "test-suite";
        
        document.body.appendChild(script);

    }

	componentWillUnmount(){
		let getScript = document.getElementById("fcc_test_suite_wrapper");

		getScript.remove();
	}
	
	render() {
		return(
			<div className="content">
				<div id="drum-machine">
					<Row className="drum-row" noGutters="true">
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[0].url}
								clipId={this.state.currentPadBank[0].id}
								keyCode={this.state.currentPadBank[0].keyCode}
								keyTrigger={this.state.currentPadBank[0].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[1].url}
								clipId={this.state.currentPadBank[1].id}
								keyCode={this.state.currentPadBank[1].keyCode}
								keyTrigger={this.state.currentPadBank[1].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[2].url}
								clipId={this.state.currentPadBank[2].id}
								keyCode={this.state.currentPadBank[2].keyCode}
								keyTrigger={this.state.currentPadBank[2].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3">
							<div className='drumpad-display' id="display"><p>{this.state.display}</p></div>
						</Col>
					</Row>
					<Row className="drum-row" noGutters="true">
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[3].url}
								clipId={this.state.currentPadBank[3].id}
								keyCode={this.state.currentPadBank[3].keyCode}
								keyTrigger={this.state.currentPadBank[3].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[4].url}
								clipId={this.state.currentPadBank[4].id}
								keyCode={this.state.currentPadBank[4].keyCode}
								keyTrigger={this.state.currentPadBank[4].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[5].url}
								clipId={this.state.currentPadBank[5].id}
								keyCode={this.state.currentPadBank[5].keyCode}
								keyTrigger={this.state.currentPadBank[5].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3"></Col>
					</Row>
					<Row className="drum-row" noGutters="true">
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[6].url}
								clipId={this.state.currentPadBank[6].id}
								keyCode={this.state.currentPadBank[6].keyCode}
								keyTrigger={this.state.currentPadBank[6].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[7].url}
								clipId={this.state.currentPadBank[7].id}
								keyCode={this.state.currentPadBank[7].keyCode}
								keyTrigger={this.state.currentPadBank[7].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3" className="pad-col">
							<DrumPad
								clip={this.state.currentPadBank[8].url}
								clipId={this.state.currentPadBank[8].id}
								keyCode={this.state.currentPadBank[8].keyCode}
								keyTrigger={this.state.currentPadBank[8].keyTrigger}
								updateDisplay={this.displayClipName}
							/>
						</Col>
						<Col xs="3"></Col>
					</Row>
				</div>
			</div>	
		);
	}
}

export default DrumMachine;