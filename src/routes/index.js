import configs from "../configs";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ThucPham from "../pages/ThucPham/ThucPham";
import AboutUs from "../pages/AboutUs/AboutUs";

const publicRoutes = [
  {
    Path: configs.Home,
    component: Home,
  },
  {
    Path: configs.Contact,
    component: Contact,
  },
  {
    Path: configs.ThucPham,
    component: ThucPham,
  },
  {
    Path: configs.AboutUs,
    component: AboutUs,
  },
];
export default publicRoutes;
