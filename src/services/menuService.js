import Service from "./service";
import Dashboard from "../views/Dashboard";
import Form from "../views/Form";
import Profile from "../views/Profile";

class MenuService extends Service {
  getMenu() {
    return [
      { path: '/home', name: 'Dashboard', component: Dashboard, link: true },
      { path: '/form', name: 'Form', component: Form, link: true},
      { path: '/profile', name: 'Profile', component: Profile, link: true},
    ]
  }
}

export default MenuService
