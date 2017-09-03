import React, { Component } from 'react';
import { Alert, Button, ControlLabel, FormControl, FormGroup, Well } from 'react-bootstrap';
import Wrappy from 'react-wrappy-text';
import flattenArray from './flattenArray';
import ClipboardTextList from './ClipboardTextList';

const TEXT_AREA_HEIGHT = 120,
    TEXT_AREA_STYLES = {
        width: '100%',
        height: TEXT_AREA_HEIGHT
    };

export default class Demo2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isError: false
        };

        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onOutputFocus = this.onOutputFocus.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onInputFocus() {
        this.inputTextArea.select();
    }

    onInputChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    onOutputFocus() {
        this.outputTextArea.select();
    }

    onButtonClick() {
        const input = this.state.input;
        let arr, output;

        try {
            arr = JSON.parse('{"arr": ' + input + '}')['arr'];
        }
        catch (ex) {
            this.setState({
                isError: true,
                output: ''
            });
            return;
        }

        try {
            output = '[' + flattenArray(arr) + ']';
        }
        catch (ex) {
            this.setState({
                isError: true,
                output: ''
            });
            return;
        }

        this.setState({
            isError: false,
            output
        });
    }

    render() {
        const isError = this.state.isError,
            validationState = isError ? 'error' : 'success',
            errorMessage = isError && (
                <Alert bsStyle="danger">
                    <h4>Your array has an error.</h4>
                    <p>The string you entered cannot be parsed as array. Please check and try again.</p>
                </Alert>
            ),
            outputPlaceholder = 'The result will be displayed here' + (isError ? ' (after the error is fixed)' : '');

        return (
            <div>

                { /* ----- Intro ----- */ }
                <Well>
                    <h3><Wrappy>Flatten an array</Wrappy></h3><br/>
                    Enter the "stringified" representation of an array into the first text area.<br/><br/>
                    Click the button to flatten the array.<br/><br/>
                    Flattened array will be displayed in second text area.<br/><br/>
                    <ClipboardTextList />
                </Well>

                { /* ----- Input ----- */ }
                <FormGroup bsSize='large' validationState={validationState}>
                    <ControlLabel>Input array (nested)</ControlLabel>
                    {errorMessage}
                    <FormControl inputRef={(dom) => { this.inputTextArea = dom; }}
                                 value={this.state.input}
                                 componentClass="textarea"
                                 placeholder='Input array (nested)'
                                 style={TEXT_AREA_STYLES}
                                 onFocus={this.onInputFocus}
                                 onChange={this.onInputChange}/>
                    <FormControl.Feedback />
                </FormGroup>
                <br/>

                { /* ----- Button ----- */ }
                <Button bsStyle="primary" bsSize="large"
                        onClick={this.onButtonClick}>Flatten array</Button>
                <br/><br/>

                { /* ----- Output ----- */ }
                <FormGroup bsSize='large'>
                    <ControlLabel>Result as an array of user_ids</ControlLabel>
                    <FormControl inputRef={(dom) => { this.outputTextArea = dom; }}
                                 value={this.state.output}
                                 componentClass="textarea"
                                 className='the-textarea'
                                 placeholder={outputPlaceholder}
                                 style={TEXT_AREA_STYLES}
                                 onFocus={this.onOutputFocus} />
                </FormGroup>
            </div>
        );
    }
}
