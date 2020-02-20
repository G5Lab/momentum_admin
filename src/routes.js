// Authentication
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ForgotPassword from './components/Auth/ForgotPassword'

// UserDashboard
import UserDashboard from './components/UserDashboard'

// Profile
import BasicProfile from './components/UserDashboard/Profile/BasicProfile'
import UpgradeMembership from './components/UserDashboard/Profile/UpgradeMembership'
import UpdateProfile from './components/UserDashboard/Profile/UpdateProfile'
import BankInfo from './components/UserDashboard/Profile/BankInfo'
import CompleteKYC from './components/UserDashboard/Profile/CompleteKYC'
import ChangePassword from './components/UserDashboard/Profile/ChangePassword'
import SetPin from './components/UserDashboard/Profile/SetPin'

// Main Wallet
import Transfer from "./components/UserDashboard/MainWallet/Transfer"
import Withdraw from "./components/UserDashboard/MainWallet/Withdraw"
import TopUpWallet from "./components/UserDashboard/MainWallet/TopUpWallet"
import MainHistory from "./components/UserDashboard/MainWallet/MainHistory"

// mSave
import SavingsHistory from "./components/UserDashboard/Msave/SavingsHistory"
import TargetSavingsAction from "./components/UserDashboard/Msave/TargetSavingsAction"
import TargetSavings from "./components/UserDashboard/Msave/TargetSavings"

// mInvest
import ViewInvestment from "./components/UserDashboard/MInvest/ViewInvestment"
import InvestmentReports from "./components/UserDashboard/MInvest/InvestmentReport"
import InvestmentHistory from "./components/UserDashboard/MInvest/InvestmentHistory"
import UploadInvestment from "./components/UserDashboard/MInvest/UploadInvestment"
import Invest from "./components/UserDashboard/MInvest/Invest"

// mAjo 
import RegisterAgent from "./components/UserDashboard/MAjo/RegisterAgent"
import BecomeAgent from "./components/UserDashboard/MAjo/BecomeAgent"
import ChangeAgent from "./components/UserDashboard/MAjo/ChangeAgent"
import BreakAjo from "./components/UserDashboard/MAjo/BreakAjoSavings"
import CreditUsers from "./components/UserDashboard/MAjo/CreditUsers"
import AjoCycle from "./components/UserDashboard/MAjo/AjoCycle"
import AjoHistory from "./components/UserDashboard/MAjo/AjoHistory"


// Support 
import CreateTicket from "./components/UserDashboard/Support/CreateTicket"
import Inbox from "./components/UserDashboard/Support/Inbox"
import Announcement from "./components/UserDashboard/Support/Announcement"
import SentMessages from "./components/UserDashboard/Support/SentMessages"

// Learning Center
import LearningMaterials from "./components/UserDashboard/LearningCenter/LearningMaterials"


const routes = [
    // Authentication
    {
        path: '/',
        component: Login
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



    // User Dashboard
    {
        path: '/userdashboard',
        component: UserDashboard
    },

    // Profile
    {
        path: '/basicprofile',
        component: BasicProfile
    },
    {
        path: '/upgrademembership',
        component: UpgradeMembership
    },
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
    {
        path: '/ChangePassword',
        component: ChangePassword
    },
    {
        path: '/Setpin',
        component: SetPin
    },

    // Main Wallet
    {
        path: '/transfer',
        component: Transfer
    },
    {
        path: '/withdraw',
        component: Withdraw
    },
    {
        path: "/MainHistory",
        component: MainHistory
    },
    {
        path: "/TopUpWallet",
        component: TopUpWallet
    },


    // mSave
    {
        path: '/savingshistory',
        component: SavingsHistory
    },
    {
        path: '/TargetSavingsAction',
        component: TargetSavingsAction
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
    {
        path: '/invest',
        component: Invest
    },
    {
        path: "/TargetSavings",
        component: TargetSavings
    },

    // mAjo
    {
        path: '/registeranagent',
        component: RegisterAgent
    },
    {
        path: '/becomeanagent',
        component: BecomeAgent
    },
    {
        path: '/changeanagent',
        component: ChangeAgent
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
        path: '/Ajocycle',
        component: AjoCycle
    },
    {
        path: '/AjoHistory',
        component: AjoHistory
    },
    // Support 
    {
        path: "/createticket",
        component: CreateTicket
    },
    {
        path: "/inbox",
        component: Inbox
    },
    {
        path: "/announcement",
        component: Announcement
    },
    {
        path: "/SentMessages",
        component: SentMessages
    },
    // Learning Center
    {
        path: "/learningmaterials",
        component: LearningMaterials
    },


]

export default routes;