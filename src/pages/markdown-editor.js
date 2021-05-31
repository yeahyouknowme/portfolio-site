import React from 'react';
import DOMPurify from 'dompurify';
import ReactDOM from 'react-dom';
import marked from 'marked';
import {Row, Col, Nav} from 'react-bootstrap';


marked.setOptions({
    breaks: true
});

const defaultMarkdown = `
# It's a Markdown Previewer

## Sub-heading(h2)
### even subber-heading(h3)

\`<div>inline code</div> \`

\`\`\`
// this is mult-line code:

function anotherExample(firstLine, lastLine) {
	if(firstLine == '\`\`\`' && lastLine == '\`\`\`') {
		return multiLineCode;
	}
}
\`\`\`

Text can be **bold**, ~~crossed out~~, or even _italian_

You can put words in someones mouth with
> Block Quotes

If you're really fancy you can make tables:

First Header | Give Header | Get Header
------------ | ----------- | ----------
content goes in | any of these | columns
you can leave | | a gap
| if you want |

list:
- level 1
	- level 2
- level 1 again

numbered list:
1. double the bread 
1. double the headers

## For more information please check out the
# [Markdown Documentation](https://www.markdownguide.org/basic-syntax/).

### Big Respect to John Gruber
![A Picture of John](https://upload.wikimedia.org/wikipedia/commons/6/64/John_Gruber%2C_2009_%28cropped%29.jpg "By Randy Stewart, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=10682505")
`

const defaultHTML = marked(defaultMarkdown);
class MarkdownEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cleanMarkup: DOMPurify.sanitize(defaultHTML)
        }
        this.updateMarkup = this.updateMarkup.bind(this);
    }


    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;
        
        document.body.appendChild(script);
    }

    componentWillUnmount(){
        document.getElementById("fcc_test_suite_wrapper")
    }

    updateMarkup(e){
        this.setState({cleanMarkup: DOMPurify.sanitize(marked(e.target.value))});
    }

    render() {
        return(
            <Row noGutters="true" className="content">
                <Col className="editor-panel">
                    <textarea 
                        defaultValue={defaultMarkdown} 
                        onChange={this.updateMarkup} 
                        id="editor"
                    />
                </Col>
                <Col className="preview-panel">
                    <div id="preview" dangerouslySetInnerHTML={{__html: this.state.cleanMarkup }} />
                </Col>
            </Row>
        )
    }
}

export default MarkdownEditor;