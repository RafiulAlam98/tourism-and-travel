import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './components/Context/AuthProvider';
import Offers from './components/Offers/Offers';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import MyOrder from './components/MyOrder/MyOrder';
import ManageOrder from './components/ManageOrder/ManageOrder';
import Admin from './Admin/Admin';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/orders/:offerId">
                <Orders></Orders>
              </PrivateRoute>
              <PrivateRoute path="/orders">
                <Orders></Orders>
              </PrivateRoute>
              <PrivateRoute path="/myorders">
                <MyOrder></MyOrder>
              </PrivateRoute>
              <PrivateRoute path="/manageOrders">
                <ManageOrder></ManageOrder>
              </PrivateRoute>
              <PrivateRoute path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
