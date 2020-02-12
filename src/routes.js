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

// mAjo 
import RegisterACm from "./components/UserDashboard/MAjo/RegisterACm"
import BecomeACm from "./components/UserDashboard/MAjo/BecomeACm"
import BreakAjo from "./components/UserDashboard/MAjo/BreakAjoSavings"
import CreditUsers from "./components/UserDashboard/MAjo/CreditUsers"
import MyAjoSettings from "./components/UserDashboard/MAjo/MyAjoSettings"

// Support 
import CreateTicket from "./components/UserDashboard/Support/CreateTicket"
import Inbox from "./components/UserDashboard/Support/Inbox"
import Announcement from "./components/UserDashboard/Support/Announcement"

// Learning Center

import LearningMaterials from "./components/UserDashboard/LearningCenter/LearningMaterials"


const routes = [
    // Authentication
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/forgotpassword',
        component: ForgotPassword
    },
    // { path: '/dashboard', component: Dashboard },

    // Admin Dashboard 
    {
        path: '/admindashboard',
        component: AdminDashboard
    },
    // AUsers
    {
        path: '/allusers',
        component: AViewAllUsers
    },
    {
        path: '/akycrequest',
        component: AKycRequest
    },
    // AmSave
    {
        path: '/amsavesettings',
        component: AMsaveSettings
    },
    {
        path: '/asavingsreport',
        component: ASavingsReport
    },
    {
        path: '/aviewallsavings',
        component: AViewAllSavings
    },
    // AmINVEST
    {
        path: "/aminvest",
        component: AmInvest
    },

    // User Dashboard
    {
        path: '/userdashboard',
        component: UserDashboard
    },

    // Profile
    {
        path: '/updateprofile',
        component: UpdateProfile
    },
    {
        path: '/bkinfo',
        component: BankInfo
    },
    {
        path: '/kyc',
        component: CompleteKYC
    },
    // mSave
    {
        path: '/savingshistory',
        component: SavingsHistory
    },
    {
        path: '/scheduledsavings',
        component: ScheduledSavings
    },
    {
        path: '/ajo',
        component: Ajo
    },
    {
        path: '/directsavings',
        component: DirectSavings
    },

    // mInvest
    {
        path: '/viewinvestment',
        component: ViewInvestment
    },
    {
        path: '/investmentreport',
        component: InvestmentReports
    },
    {
        path: '/investmenthistory',
        component: InvestmentHistory
    },
    {
        path: '/uploadinvestment',
        component: UploadInvestment
    },

    // mAjo
    {
        path: '/registeracm',
        component: RegisterACm
    },
    {
        path: '/becomeacm',
        component: BecomeACm
    },
    {
        path: '/breakajosavings',
        component: BreakAjo
    },
    {
        path: '/credituser',
        component: CreditUsers
    },
    {
        path: '/myajosettings',
        component: MyAjoSettings
    },
    // Support 
    {
        path: "/createticket",
        component: CreateTicket
    },
    {
        path: "/inbox",
        component: Inbox
    }, {
        path: "/announcement",
        component: Announcement
    },
    // Learning Center
    {
        path: "/learningmaterials",
        component: LearningMaterials
    }
]

export default routes;