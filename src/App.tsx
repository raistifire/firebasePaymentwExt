import MainRoute from './screens/mainRoute'
import './App.css';
//import Child from './Child';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom"

import Child from "./Child";
import {SignInPage} from "./auth/signInPage";
import {LandingPage} from "./views/landingPage";
import {TokenPage} from "./views/TokenPage";

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route component={LandingPage} path="/" exact />
                  <Route component={SignInPage} path="/signin" exact />
=                  <Route component={MainRoute} path="/test" exact />
                  <Route component={TokenPage} path="/:token" exact />
                  {/*<PrivateRoute component={DashboardPage} path="/:token" exact />*/}

              </Switch>
            </div>
      </Router>)
}

export default App;
