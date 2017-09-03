import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router'
import App from './App';
import Index from './components/Index';
import Demo1 from './components/demo1/Demo1';
import Demo2 from './components/demo2/Demo2';
import Demo3 from './components/demo3/Demo3';

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="demo1" component={Demo1} />
            <Route path="demo2" component={Demo2} />
            <Route path="demo3" component={Demo3} />
        </Route>
    </Router>
), document.getElementById('root'));
