import configs from "../configs";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";

const publicRoutes = [
  {
    Path: configs.Home,
    component: Home,
  },
  {
    Path: configs.Contact,
    component: Contact,
  },
];
export default publicRoutes;
