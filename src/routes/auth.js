import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import ForgotPassword from '../components/Auth/ForgotPassword'
import Welcome from '../components/Auth/Welcome'
import Recover from '../components/Auth/Recover'
import Initial from '../components/Auth/Initial'

const auth = [{
        path: '/',
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            guest: true
        }
    },
    {
        path: '/forgotpassword',
        component: ForgotPassword,
        meta: {
            guest: true
        }
    },
    {
        path: "/recover",
        component: Recover
    },
    {
        path: "/initial",
        component: Initial
    },
    {
        path: '/welcomemessage',
        component: Welcome,
        meta: {
            registerNow: true
        }
    },
]

export default auth;