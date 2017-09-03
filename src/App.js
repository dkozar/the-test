import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import {demos} from './components/demos';
import './App.css';

export default class App extends Component {
    render() {
        const demoUrl = this.props.routes[this.props.routes.length - 1].path,
            demo = demos.find(function (item) {
                return item.url === demoUrl;
            }),
            demoTitle = demo ? demo.title : null;

        return (
            <div className="App">
                <Breadcrumb>
                    <BreadcrumbItem href="#">
                        The test
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {demoTitle}
                    </BreadcrumbItem>
                </Breadcrumb>
                {this.props.children}
            </div>
        );
    }
}
