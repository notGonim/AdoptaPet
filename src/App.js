import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import { lazy, Suspense } from "react";
import useAuthListener from "./hooks/useAuth.hook";
import UserContext from "./context/user.context";
import IsUserLoggedIn from "./helpers/isUserLoggedIn";
import ProtectedRoute from "./helpers/protectedRoutes";
import Spinner from "./components/spinner/spinner.component";




const SheltersPage = lazy(() => import('./pages/sheltersPage'))
const StoriesPage = lazy(() => import('./pages/storiesPage'))
const Landpage = lazy(() => import('./pages/LandPage'))
const Signin = lazy(() => import('./pages/SigninPage'))
const Signup = lazy(() => import('./pages/SignupPage'))
const Home = lazy(() => import('./pages/home'))
const Profile = lazy(() => import('./pages/profile.page'))
const Setting = lazy(() => import('./pages/setting.page'))
const NotFound = lazy(() => import('./pages/404.page'))





function App() {

  const { ...user } = useAuthListener()
  

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact   >
              <Home />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.SHELTERS} exact   >
              <SheltersPage />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.STORIES} exact   >
              <StoriesPage />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.PROFILE} exact   >
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.SETTING} exact   >
              <Setting />
            </ProtectedRoute>
            <IsUserLoggedIn user={user} exact loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LANDPAGE}>
              <Landpage />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} exact loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
              <Signin />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} exact loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGNUP}>
              <Signup />
            </IsUserLoggedIn>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
