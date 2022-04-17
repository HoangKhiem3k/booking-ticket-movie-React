import './App.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import CheckoutTemplate from './template/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { UserTemplate } from './template/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
// import {Suspense,lazy} from 'react';
export const history = createBrowserHistory();
// const CheckoutTemplateLazy = lazy(() => import('./template/CheckoutTemplate/CheckoutTemplate'));
function App() {
  return (
    <Router history={history}>
        <Loading/>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <UserTemplate path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
        {/* <Suspense> gan loadding khi chua load xong */}
        {/* <Suspense fallback={<h1>loading ...</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />  
        </Suspense> */}
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
