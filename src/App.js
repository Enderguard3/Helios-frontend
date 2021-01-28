import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import routes from './routes'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(route => (
                    <Route exact path={route.path} key={route.name} component={route.component} />
                ))}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
