import React, { Component } from 'react';
import { FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import ClipboardButton from 'react-clipboard.js';

export default class ClipboardText extends Component {

    constructor(props) {
        super(props);

        this.onInputSelect = this.onInputSelect.bind(this);
    }

    onInputSelect() {
        this.input.select();
    }

    render() {
        const text = this.props.children;

        return (
            <FormGroup className={'clipboard'}>
                <FormControl inputRef={(dom) => { this.input = dom; }}
                             componentClass='input'
                             value={text}
                             onSelect={this.onInputSelect} />
                <ClipboardButton data-clipboard-text={text} button-title='Click to copy'>
                    <Glyphicon glyph='copy' />
                </ClipboardButton>
            </FormGroup>
        );
    }
}
