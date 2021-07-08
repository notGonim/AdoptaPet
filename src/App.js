import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import { lazy, Suspense } from "react";





const Landpage = lazy(() => import('./pages/LandPage'))
const Signin = lazy(() => import('./pages/SigninPage'))
const Signup = lazy(() => import('./pages/SignupPage'))




function App() {
  return (
    <Router>
    <Suspense fallback={<p>Loading ...</p>}>
      <Switch>
        <Route  path={ROUTES.LANDPAGE} exact component={Landpage} />
        <Route  path={ROUTES.LOGIN} exact component={Signin} />
        <Route  path={ROUTES.SIGNUP} exact component={Signup} />
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
