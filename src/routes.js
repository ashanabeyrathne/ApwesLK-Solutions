// core components
import Dashboard from "views/admin/Dashboard.js";
import Icons from "views/admin/CustomerManagement";
import Login from "views/auth/Login.js";
import EmployeeManagement from "views/admin/EmployeeManagement.js";
import OrderManagement from "views/admin/OrderManagement.js";
import Register from "views/auth/Register.js";
import PayrollManagement from "views/admin/PayrollManagement";
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
// import Dns from "@material-ui/icons/Dns";
// import FlashOn from "@material-ui/icons/FlashOn";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
// import Palette from "@material-ui/icons/Palette";
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";

var routes = [
 
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/customermanagement",
    name: "Customer Management",
    icon: Person,
    iconColor: "Primary",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/employeemanagement",
    name: "Employee Management",
    icon: Person,
    iconColor: "Warning",
    component: EmployeeManagement,
    layout: "/admin",
  },
  {
    path: "/ordermanagement",
    name: "Order Management",
    icon: Person,
    iconColor: "WarningLight",
    component: OrderManagement,
    layout: "/admin",
  },
  {
    path: "/payrollmanagement",
    name: "Payroll Management",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: PayrollManagement,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "User Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  },
  {
    divider: true,
  },
  {
    title: "Alert",
  },
  {
    path: "/index",
    name: "Notification Center",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  
];
export default routes;
