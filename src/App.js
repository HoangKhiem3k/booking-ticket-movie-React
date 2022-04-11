import './App.css';
import {createBrowserHistory} from 'history';
import { Router } from 'react-router';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import { Switch } from 'react-router-dom';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
      <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
