import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'github-markdown-css/github-markdown.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu/Menu";
import MarkdownRender from "./components/MarkdownRender/MarkdownRender";
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

function App() {
    const items = [
        {text: 'Index', link_to: '/index', filename: 'Readme.md'},
        {text: 'InputText', link_to: '/InputText', filename: 'InputText.md'},
        {text: 'InputNumber', link_to: '/InputNumber', filename: 'InputNumber.md'},
        {text: 'Button', link_to: '/Button', filename: 'Button.md'},
        {text: 'Autocomplete', link_to: '/Autocomplete', filename: 'Autocomplete.md'},
        {text: 'SelectInput', link_to: '/SelectInput', filename: 'SelectInput.md'},
    ]
    return (
        <Router>
            <div className="row">
                <div className="col-12">
                    <img src={logo} alt="logo"/> Showcasing
                </div>
                <div className="col-6 col-lg-2 menu">
                    <Menu items={items}/>
                </div>
                <div className="col-6 col-lg-10 main">
                    <Switch>
                        {items.map(item => <Route path={item.link_to} key={item.link_to}>
                            <div>
                                <MarkdownRender filename={item.filename}/>
                            </div>
                        </Route>)}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
