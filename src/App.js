import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Alerts from "./components/Alerts";
import Agents from "./components/Agents";
import Rules from "./components/Rules";
import Dashboard from "./components/Dashboard";
import AlertsDetail from "./components/AlertsDetail";

//Redux
import {Provider} from 'react-redux';
import store from "./store";
import RulesDetail from "./components/RulesDetail";

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/alerts" component={Alerts}/>
                        <Route exact path="/alerts/:id" component={AlertsDetail}/>
                        <Route exact path="/agents" component={Agents}/>
                        <Route exact path="/rules" component={Rules}/>
                        <Route exact path="/rules/:id" component={RulesDetail}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
