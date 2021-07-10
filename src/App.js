import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import { lazy, Suspense } from "react";
import useAuthListener from "./hooks/useAuth.hook";
import UserContext from "./context/user.context";





const Landpage = lazy(() => import('./pages/LandPage'))
const Signin = lazy(() => import('./pages/SigninPage'))
const Signup = lazy(() => import('./pages/SignupPage'))




function App() {

  const { user } = useAuthListener()

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.LANDPAGE} exact component={Landpage} />
            <Route path={ROUTES.LOGIN} exact component={Signin} />
            <Route path={ROUTES.SIGNUP} exact component={Signup} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
