import { renderLogin } from "./login.js";
import { renderCreateAccount } from "./create-account.js";
//import { renderFeed} from './feed.js' ;
import { error } from './error.js';

let root = document.getElementById("root");

//---------------------------------Routes-----------------------------------
const defaultRoute = "/";
const routes = [
  { path: "/", component: renderLogin },
  { path: "/signin", component: renderCreateAccount },
  //{ path: "/feed", component: feed },
  { path: "/error", component: error },
];

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }

    root.appendChild(route.component());
  } else {
    navigateTo("/error");
  }
}

//---------------------------------Render Login-----------------------------------
function initRouter() {
  navigateTo(window.location.pathname || defaultRoute);
}
initRouter();

//---------------------------------Render Create Account--------------------------
const btnCreateAccount = document.getElementById("account");

btnCreateAccount.addEventListener("click", () => {
  navigateTo("/signin");
});


