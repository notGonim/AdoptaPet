import './App.css';
import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";
import LandPage from './pages/LandPage'

function App() {
  return (
    <>
      <Router>
        <Route path='/' component={LandPage} />
      </Router>


    </>
  );
}

export default App;
