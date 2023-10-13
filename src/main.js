import { renderLogin } from "./components/login.js";
import { renderCreateAccount } from "./components/create-account.js";
//import { renderFeed} from './feed.js' ;
import { error } from './components/error.js';

const defaultRoute = '/';
const root = document.getElementById('root');

const routes = [
  { path: '/', component: renderLogin },
  { path: '/signin', component: renderCreateAccount },
  { path: '/error', component: error },
];

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
   } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);


