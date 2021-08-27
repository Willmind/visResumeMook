import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Title from "@src/title";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div>可视化简历平台</div>
                    <div>这是 Electron + React1231</div>
                    <Title text={'12312312'}></Title>
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));