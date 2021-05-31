import React from 'react';
import {Row, Col, Nav} from 'react-bootstrap';

class QuoteMachine extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			nextQuote: {},
			error: null,
			isLoaded: false,
			quotes: []
		};
		this.handleUpdate = this.handleUpdate.bind(this)
	}
	
	
	
	componentDidMount() {
		// get quotes object
		fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					// set first quote
					nextQuote: result.quotes[Math.floor(Math.random() * result.quotes.length)],
					isLoaded: true,
					quotes: result.quotes
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)

        const script = document.createElement("script");

        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;
        
        document.body.appendChild(script);
	}
	
    componentWillUnmount(){
        document.getElementById("fcc_test_suite_wrapper").remove();
    }

	// get a new quote object from the state
	handleUpdate(e) {
		let quote = this.state.nextQuote;
		let newQuote = this.state.nextQuote;
		//ensure no direct repeats
		while(quote === newQuote){
			newQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
		};
		this.setState({nextQuote: newQuote});
	}
	
	
	
	render() {
		const { nextQuote, error, isLoaded, quotes } = this.state;
		//render error if we receive an error
		if(error){
			return <div>Error: {error.message}</div>;
		} 
		//render loading view until we get a response
		else if (!isLoaded) {
			return <div>Loading...</div>;
		} 
		//render content after we get a response with no errors
		else {
			return(
				<div className="flex-column fcc-backdrop">
                        <div className="flex-column" id="quote-box">
                            <div className="flex-column" id="quote-row">
                                <div id="text">{nextQuote.quote}</div>
                                <div id="author">- {nextQuote.author}</div>
                            </div>
                            <div className="flex-row" id="button-row">
                                <button id="new-quote" onClick={this.handleUpdate}>New Quote</button>
                                <a
                                    href={
                                        "https://twitter.com/intent/tweet?text=" 
                                        + nextQuote.quote 
                                        + "%0a" /* url encoded new-line */
                                        + "    - "
                                        + nextQuote.author 
                                    }
                                    target="_blank"
                                    id="tweet-quote"
                                >
									<div className="mr-2">
										Tweet Quote 
									</div>
									<div>
										<i className="twitter-icon fab fa-twitter-square fa-2x"></i>
									</div>
                                </a>
                            </div>
                        </div>
				</div>
			);
		}
	}
};

export default QuoteMachine;
