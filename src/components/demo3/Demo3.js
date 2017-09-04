import React, { Component } from 'react';
import { Alert, Button, ControlLabel, FormControl, FormGroup, Well } from 'react-bootstrap';
import FileProcessor from './FileProcessor';
import Wrappy from 'react-wrappy-text';

const DATA_URL = 'https://gist.githubusercontent.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt',
    DEFAULT_MAX_DISTANCE = 100,
    TEXT_AREA_HEIGHT = 120,
    TEXT_AREA_STYLES = {
        width: '100%',
        height: TEXT_AREA_HEIGHT
    };

export default class Demo3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            url: DATA_URL,
            distance: DEFAULT_MAX_DISTANCE,
            output: '',
            isDistanceError: false,
            isLoading: false,
            isProcessingError: false
        };

        this.onUrlFocus = this.onUrlFocus.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.onDistanceFocus = this.onDistanceFocus.bind(this);
        this.onDistanceChange = this.onDistanceChange.bind(this);
        this.onDistanceBlur = this.onDistanceBlur.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);

        // instantiate file processor, once
        this.fileProcessor = new FileProcessor(this.onSuccess, this.onFailure);
    }

    onUrlFocus() {
        this.urlTextField.select();
    }

    onUrlChange() {
        this.setState({
            url: this.urlTextField.value
        });
    }

    onDistanceFocus() {
        this.distanceTextField.select();
    }

    onDistanceChange() {
        this.processDistance();
    }

    onDistanceBlur() {
        this.processDistance();
    }

    processDistance() {
        const distanceAsText = this.distanceTextField.value,
            distance = parseFloat(distanceAsText),
            isValidDistance = !isNaN(distance);

        this.setState({
            isDistanceError: !isValidDistance,
            distance
        });
    }

    onButtonClick() {
        const distanceAsText = this.distanceTextField.value,
            distance = parseFloat(distanceAsText),
            isValidDistance = !isNaN(distance);

        this.setState({
            isProcessingError: false,
            output: ''
        });

        if (!isValidDistance) {
            return;
        }

        this.setState({
            isDistanceError: false,
            isLoading: true
        });

        this.fileProcessor.loadAndProcess(this.state.url, this.state.distance);
    }

    onSuccess(data) {
        const isEmptyArray = !data.length;

        this.setState({
            isLoading: false,
            output: isEmptyArray ? 'No users in given radius' : data,
            isProcessingError: false
        });
    }

    onFailure() {
        this.setState({
            isLoading: false,
            isProcessingError: true
        });
    }

    render() {
        const isLoading = this.state.isLoading,
            buttonText = isLoading ? 'Loading...' : 'Load and process data',
            isDistanceError = this.state.isDistanceError,
            isDistanceValidationState = isDistanceError ? 'error' : 'success',
            distanceErrorMessage = isDistanceError && (
                <Alert bsStyle="danger">
                    <h4>Your input has an error.</h4>
                    <p>The string you entered cannot be parsed as number. Please check and try again.</p>
                </Alert>
            ),
            isProcessingError = this.state.isProcessingError,
            processingValidationState = isProcessingError ? 'error' : 'success',
            processingErrorMessage = isProcessingError && (
                <Alert bsStyle="danger">
                    <h4>Processing error.</h4>
                    <p>Something went wrong. Please check the URL and try again.</p>
                </Alert>
            );

        return (
            <div>

                { /* ----- Intro ----- */ }
                <Well>
                    <h3><Wrappy>GPS coordinates</Wrappy></h3><br/>
                    Click the button to start the asynchronous loading of data.<br/><br/>
                    After the data is retrieved from the server, it will be processed.<br/><br/>
                    The result will be displayed in the text area below.<br/><br/>
                </Well>

                { /* ----- URL text field ----- */ }
                <FormGroup bsSize='large' validationState={processingValidationState}>
                    <ControlLabel>URL to load the data from</ControlLabel>
                    {processingErrorMessage}
                    <FormControl inputRef={(dom) => { this.urlTextField = dom; }}
                                 componentClass='textarea'
                                 defaultValue={this.state.url}
                                 onFocus={this.onUrlFocus}
                                 onChange={this.onUrlChange} />
                </FormGroup>

                { /* ----- Distance text field ----- */ }
                <FormGroup bsSize='large' validationState={isDistanceValidationState}>
                    <ControlLabel>Max distance to the office (km)</ControlLabel>
                    {distanceErrorMessage}
                    <FormControl inputRef={(dom) => { this.distanceTextField = dom; }}
                                 componentClass='input'
                                 defaultValue={this.state.distance}
                                 onFocus={this.onDistanceFocus}
                                 onChange={this.onDistanceChange}
                                 onBlur={this.onDistanceBlur} />
                </FormGroup>

                { /* ----- Button ----- */ }
                <Button bsStyle="primary" bsSize="large"
                        disabled={isLoading}
                        onClick={this.onButtonClick}>{buttonText}</Button>
                <br/><br/>

                { /* ----- Results text area ----- */ }
                <FormGroup bsSize='large'>
                    <ControlLabel>Processed result (array of user_ids)</ControlLabel>
                    <FormControl inputRef={(dom) => { this.outputTextArea = dom; }}
                                 value={this.state.output}
                                 componentClass="textarea"
                                 placeholder='The result will be displayed here'
                                 style={TEXT_AREA_STYLES}
                                 onFocus={this.onOutputFocus} />
                </FormGroup>
            </div>
        );
    }
}
