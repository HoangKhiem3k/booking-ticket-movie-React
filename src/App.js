import './App.css';
import { createBrowserHistory } from 'history';
import {  Router, Switch } from 'react-router';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import CheckoutTemplate from './template/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import Profile from './pages/Profile/Profile';
import { UserTemplate } from './template/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import AdminTemplate from './template/AdminTemplate.js/AdminTemplate';
import Films from './pages/Admin/Films/Films';
import AddNew from './pages/Admin/Films/AddNew/AddNew'
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
        <UserTemplate path="/register" exact Component={Register} />
        <HomeTemplate path="/profile" exact Component={Profile} />
        {/* <Suspense> gan loadding khi chua load xong */}
        {/* <Suspense fallback={<h1>loading ...</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />  
        </Suspense> */}
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
      </Switch>
    </Router>
  );
}

export default App;
