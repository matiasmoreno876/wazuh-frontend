import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Alerts from "./components/Alerts";
import Agents from "./components/Agents";
import Rules from "./components/Rules";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Router>
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path="/alerts" component={Alerts}/>
                    <Route exact path="/agents" component={Agents}/>
                    <Route exact path="/rules" component={Rules}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                </Switch>

            </div>

        </Router>
    );
}

export default App;
