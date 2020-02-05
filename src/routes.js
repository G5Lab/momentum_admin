import Home from './components/Auth/Home';
import Register from './components/Auth/Register.vue';
import Login from './components/Auth/Login.vue';
import ForgotPassword from './components/Auth/ForgotPassword'
import AdminDashboard from './components/AdminLayouts/AdminDashboard'
import MInvest from './components/MInvestLayouts/MInvest'


const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/forgotpassword', component: ForgotPassword },
    { path: '/admin', component: AdminDashboard },
    { path: '/minvest', component: MInvest },
];
export default routes;