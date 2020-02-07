// Authentication

import Home from './components/Auth/Home';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ForgotPassword from './components/Auth/ForgotPassword'

// UserDashboard
import UserDashboard from './components/UserDashboard'

// Profile
import UpdateProfile from './components/UserDashboard/Profile/UpdateProfile'
import BankInfo from './components/UserDashboard/Profile/BankInfo'

const routes = [
    // Authentication
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgotpassword', component: ForgotPassword },
    // { path: '/dashboard', component: Dashboard },

    // User Dashboard
    { path: '/userdashboard', component: UserDashboard },

    // Profile
    { path: '/updateprofile', component: UpdateProfile },
    { path: '/bkinfo', component: BankInfo }

]

export default routes;