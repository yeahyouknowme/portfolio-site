import React from 'react';
import {Row, Col, Nav} from 'react-bootstrap';


const accurateInterval = function (fn, time) {
  var cancel, nextAt, timeout, wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  wrapper = function () {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function () {
    return clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel
  };
};

const BreakBlock = ({length, handleSetLength}) => {
    return(
      <div className="break-block" id="break-block">
        <div id="break-label">Break Length</div>
        <div className="setting-button-row">
            <button 
                className="setting-button" 
                id="break-decrement" 
                onClick={(e, mode, change) => handleSetLength(e, 'b', -1)}
            >
                <i className="fas fa-angle-down"></i>
            </button>
            <div id="break-length">{length}</div>
            <button 
                className="setting-button" 
                id="break-increment" 
                onClick={(e, mode, change) => handleSetLength(e, 'b', 1)}
            >
                <i className="fas fa-angle-up"></i>
            </button>
        </div>
      </div>
    )
  }
  
const SessionBlock = ({length, handleSetLength}) => {
return(
    <div className="session-block" id="session-block">
    <div id="session-label">Session Length</div>
    <div className="setting-button-row">
        <button 
            className="setting-button" 
            id="session-decrement" 
            onClick={(e, mode, change) => handleSetLength(e, 's', -1)}
        >
            <i className="fas fa-angle-down"></i>
        </button>
        <div id="session-length">{length}</div>
        <button 
            className="setting-button" 
            id="session-increment" 
            onClick={(e, mode, change) => handleSetLength(e, 's', 1)}
        >
            <i className="fas fa-angle-up"></i>
        </button>
    </div>
    </div> 
)
}
class SessionTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          breakLength: 5,
          sessionLength: 25,
          sessionTimer: 1500,
          timerId: '',
          timerOn: false,
          timerType: "Session"
        }
    this.handleSetLength = this.handleSetLength.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.beginTimer = this.beginTimer.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
    this.switchTimer = this.switchTimer.bind(this);
    this.buzzer = this.buzzer.bind(this);
    this.formatTimer = this.formatTimer.bind(this);
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

    handleSetLength(e, mode, change) {
        e.preventDefault();

        switch(mode){
            case 's':
                let newSession = this.state.sessionLength + change;

                if(this.state.sessionLength < 1){
                    newSession = 1;
                };
                if(this.state.sessionLength > 59){
                    newSession = 60;
                };

                this.setState({
                    sessionLength: newSession,
                    sessionTimer: newSession * 60
                });

                break;
            
            case 'b':
                let newBreak = this.state.breakLength + change;

                if(this.state.breakLength < 1){
                    newBreak = 1;
                };

                if(this.state.breakLength > 59){
                    newBreak = 60;
                };
                
                this.setState({breakLength: newBreak})
                break;
            default:
                break
        }

    };
    
    handleReset(e) {
    e.preventDefault();
    this.setState({
        sessionLength: 25,
        breakLength: 5,
        sessionTimer: 1500,
        timerId: '',
        timerOn: false,
        timerType: 'Session'
    });
    if(this.state.timerId){
        this.state.timerId.cancel();
    }
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
    };
    
    handleStartStop(e) {
    e.preventDefault();
    if(this.state.timerOn === false){
        console.log("start");
        this.beginTimer();
        this.setState({
        timerOn: true 
        });
    }
    else {
        console.log("stop");
        this.setState({ timerOn: false});
        if(this.state.timerId) {
        this.state.timerId.cancel();
        }
    }
    }
    
    
    beginTimer() {
    this.setState({
        timerId: accurateInterval(() => {
        this.decrementTimer();
        this.phaseControl();
        }, 1000)
    });
    }
    
    decrementTimer() {
    this.setState({ sessionTimer: this.state.sessionTimer - 1})
    }
    
    phaseControl() {
    let timer = this.state.sessionTimer;
    this.buzzer(timer);
    if(timer < 0){
        if(this.state.timerId) {
        this.state.timerId.cancel();
        }
        if (this.state.timerType === 'Session') {
        this.beginTimer();
        this.switchTimer(this.state.breakLength * 60, 'Break');
        }
        else {
        this.beginTimer();
        this.switchTimer(this.state.sessionLength * 60, 'Session');
        }
    }
    }
    
    switchTimer(num, str){
    this.setState({
        sessionTimer: num,
        timerType: str
    })
    }
    
    buzzer(_timer){
    if(_timer === 0){
        this.audioBeep.play()
    }
    }
    
    formatTimer() {
    let minutes = Math.floor(this.state.sessionTimer / 60);
    let seconds = this.state.sessionTimer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
    }
    
    render() {
        return(
            <div className="timer-content">
                <div className="timer-face" id="top-level">
                    <div className='timer-controls'>
                        <BreakBlock length={this.state.breakLength} handleSetLength={this.handleSetLength} />
                        <SessionBlock length={this.state.sessionLength} handleSetLength={this.handleSetLength} />
                    </div>
                    <div id="timer-block">
                        <div id="timer-label">{this.state.timerType}</div>
                        <div id="time-left">{this.formatTimer()}</div>
                    </div>
                    <div className="flex-row timer-button-row">
                        <button className="timer-button" id="start_stop" onClick={this.handleStartStop}>
                            {this.state.timerOn
                                ? "Stop"
                                : "Start" }
                        </button>
                        <button className="timer-button" id="reset" onClick={this.handleReset}>Reset</button>
                    </div>
                    <audio
                    id="beep"
                    preload="auto"
                    ref={(audio) => {
                        this.audioBeep = audio;
                    }}
                    src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                    />
                </div>
            </div>
        )
    }
}

export default SessionTimer;