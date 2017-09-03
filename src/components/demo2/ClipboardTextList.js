import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import ClipboardText from './ClipboardText';

import { snippets } from './clipboardSnippets';

export default class ClipboardTextList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const buttonText = this.state.open ? 'Hide suggestions' : 'Show suggestions',
            rows = snippets.map((snippet, i) => (
                <ClipboardText key={'text-'+i}>{snippet}</ClipboardText>
            ));

        return (
            <div>
                <Button className='btn-suggestions'
                        bsStyle="link"
                        onClick={this.onButtonClick}>
                    {buttonText}
                </Button>
                <Panel collapsible expanded={this.state.open}>
                    {rows}
                </Panel>
            </div>
        );
    }
}
