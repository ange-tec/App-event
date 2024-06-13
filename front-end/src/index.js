import Router from './Router';
import Dashboard from './controllers/Dashboard';
import Login from './controllers/Login';
import Register from './controllers/Register';
import Edit from './controllers/Edit';
import Readmore from './controllers/Readmore';
import Create from './controllers/Create';
import HomePage from './controllers/HomePage';

import './index.scss';

const routes = [{
  url: '/dashboard',
  controller: Dashboard
}, {
  url: '/login',
  controller: Login
},
{
  url: '/register',
  controller: Register
},
{
  url: '/edit',
  controller: Edit
},
{
  url: '/readmore',
  controller: Readmore
},
{
  url: '/create',
  controller: Create
},
{
  url: '/homepage',
  controller: HomePage
}
];

new Router(routes);
