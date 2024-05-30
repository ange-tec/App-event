import Router from './Router';
import Home from './controllers/Home';
import Login from './controllers/Login';
import Register from './controllers/Register';

import './index.scss';

const routes = [{
  url: '/home',
  controller: Home
},
{
  url: '/login',
  controller: Login
},
{
  url: '/register',
  controller: Register
// }, {
//   url: '/discover',
//   controller: Discover
}];

new Router(routes);
