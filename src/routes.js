// Authentication
import Home from './components/Auth/Home';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ForgotPassword from './components/Auth/ForgotPassword'


// AdminDashboard
import AdminDashboard from './components/AdminDashboard'
// AUser 
import AViewAllUsers from './components/AdminDashboard/Users/ViewAllUsers'
import AKycRequest from './components/AdminDashboard/Users/KycRequest'
// AmSave
import AMsaveSettings from './components/AdminDashboard/MSave/MsaveSettings'
import ASavingsReport from './components/AdminDashboard/MSave/SavingsReport'
import AViewAllSavings from './components/AdminDashboard/MSave/ViewAllSavings'

// AmInvest
import AmInvest from './components/AdminDashboard/MInvest'

// UserDashboard
import UserDashboard from './components/UserDashboard'

// Profile
import UpdateProfile from './components/UserDashboard/Profile/UpdateProfile'
import BankInfo from './components/UserDashboard/Profile/BankInfo'
import CompleteKYC from './components/UserDashboard/Profile/CompleteKYC'

// mSave
import SavingsHistory from "./components/UserDashboard/Msave/SavingsHistory"
import ScheduledSavings from "./components/UserDashboard/Msave/ScheduledSavings"
import Ajo from "./components/UserDashboard/Msave/Ajo"
import DirectSavings from "./components/UserDashboard/Msave/DirectSavings"

// mInvest
import ViewInvestment from "./components/UserDashboard/MInvest/ViewInvestment"
import InvestmentReports from "./components/UserDashboard/MInvest/InvestmentReport"
import InvestmentHistory from "./components/UserDashboard/MInvest/InvestmentHistory"
import UploadInvestment from "./components/UserDashboard/MInvest/UploadInvestment"

const routes = [
    // Authentication
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgotpassword', component: ForgotPassword },
    // { path: '/dashboard', component: Dashboard },

    // Admin Dashboard 
    { path: '/admindashboard', component: AdminDashboard },
    // AUsers
    { path: '/allusers', component: AViewAllUsers },
    { path: '/akycrequest', component: AKycRequest },
    // AmSave
    { path: '/amsavesettings', component: AMsaveSettings },
    { path: '/asavingsreport', component: ASavingsReport },
    { path: '/aviewallsavings', component: AViewAllSavings },
    // AmINVEST
    { path: "/aminvest", component: AmInvest },

    // User Dashboard
    { path: '/userdashboard', component: UserDashboard },

    // Profile
    { path: '/updateprofile', component: UpdateProfile },
    { path: '/bkinfo', component: BankInfo },
    { path: '/kyc', component: CompleteKYC },
    // mSave
    { path: '/savingshistory', component: SavingsHistory },
    { path: '/scheduledsavings', component: ScheduledSavings },
    { path: '/ajo', component: Ajo },
    { path: '/directsavings', component: DirectSavings },

    // mInvest
    { path: '/viewinvestment', component: ViewInvestment },
    { path: '/investmentreport', component: InvestmentReports },
    { path: '/investmenthistory', component: InvestmentHistory },
    { path: '/uploadinvestment', component: UploadInvestment }

]

export default routes;