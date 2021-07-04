import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import { lazy, Suspense } from "react";





const Landpage = lazy(() => import('./pages/LandPage'))




function App() {
  return (
    <Router>
    <Suspense fallback={<p>Loading ...</p>}>
      <Switch>
        <Route  path={ROUTES.LANDPAGE} exact component={Landpage} />
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
