import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Wrappy from 'react-wrappy-text';
import { demos } from './demos';

export default class Index extends Component {
    render() {
        return (
            <div>
                {this.props.params[0]}
                <h1><Wrappy>The test</Wrappy></h1>
                <blockquote>
                    This single-page application is created using <em><a href='https://facebook.github.io/react/' target='_blank'>ReactJS</a></em>.<br/><br/>
                    It contains my answers to 3 questions for Senior Software Engineer position.<br/><br/>
                    Please note that the code is also covered with unit tests (using <em>jest</em>).<br/><br/>
                    <a href='https://github.com/dkozar/the-test/' target={'_blank'}>Source on GitHub</a><br/><br/>
                    <em>&copy; 2017 by Danko Kozar</em>
                </blockquote>
                <ListGroup>
                    {
                        demos.map(task => (
                            <ListGroupItem key={task.url}
                                           href={'#/' + task.url}
                                           header={task.title}>
                                {task.description}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        );
    }
}
