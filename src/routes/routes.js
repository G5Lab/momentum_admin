// Cooming Soon
import MarketPlace from "../components/UserDashboard/Cooming/MarketPlace"
import HirePurchase from "../components/UserDashboard/Cooming/HirePurchase"
import Loan from "../components/UserDashboard/Cooming/Loan"


// Authentication
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import ForgotPassword from '../components/Auth/ForgotPassword'
import Welcome from '../components/Auth/Welcome'
import Recover from '../components/Auth/Recover'
import Initial from '../components/Auth/Initial'
import TermsCondition from "../components/Auth/TermsCondition"
import PrivacyPolicy from "../components/Auth/PrivacyPolicy"

// UserDashboard
import UserDashboard from '../components/UserDashboard'

// Profile
import BasicProfile from '../components/UserDashboard/Profile/BasicProfile'
import UpgradeMembership from '../components/UserDashboard/Profile/UpgradeMembership'
import UpdateProfile from '../components/UserDashboard/Profile/UpdateProfile'
import BankInfo from '../components/UserDashboard/Profile/BankInfo'
import CompleteKYC from '../components/UserDashboard/Profile/CompleteKYC'
import ChangePassword from '../components/UserDashboard/Profile/ChangePassword'
import ResetPin from '../components/UserDashboard/Profile/ResetPin'

// Main Wallet
import Transfer from "../components/UserDashboard/MainWallet/Transfer"
import Withdraw from "../components/UserDashboard/MainWallet/Withdraw"
import TopUpWallet from "../components/UserDashboard/MainWallet/TopUpWallet"
import MainHistory from "../components/UserDashboard/MainWallet/MainHistory"

// mSave
import SavingsHistory from "../components/UserDashboard/Msave/SavingsHistory"
import TargetSavingsAction from "../components/UserDashboard/Msave/TargetSavingsAction"
import TargetSavings from "../components/UserDashboard/Msave/TargetSavings"



// mAjo 
import RegisterAgent from "../components/UserDashboard/MAjo/RegisterAgent"
import BecomeAgent from "../components/UserDashboard/MAjo/BecomeAgent"
import BreakAjo from "../components/UserDashboard/MAjo/BreakAjoSavings"
import CreditUsers from "../components/UserDashboard/MAjo/CreditUsers"
import SetAjoCycle from "../components/UserDashboard/MAjo/SetAjoCycle"
import AjoHistory from "../components/UserDashboard/MAjo/AjoHistory"

// mInvest
import ViewInvestment from "../components/UserDashboard/MInvest/ViewInvestment"
import InvestmentReports from "../components/UserDashboard/MInvest/InvestmentReport"
import InvestmentHistory from "../components/UserDashboard/MInvest/InvestmentHistory"
import UploadInvestment from "../components/UserDashboard/MInvest/UploadInvestment"
import InvestmentDetails from "../components/UserDashboard/MInvest/InvestmentDetails"
import InvestmentReportDetails from "../components/UserDashboard/MInvest/InvestmentReportDetails"


// Support 
import CreateTicket from "../components/UserDashboard/Support/CreateTicket"
import Inbox from "../components/UserDashboard/Support/Inbox"
import Announcement from "../components/UserDashboard/Support/Announcement"
import SentMessages from "../components/UserDashboard/Support/SentMessages"
import InboxDetails from "../components/UserDashboard/Support/InboxDetails"
import AnnouncementDetails from "../components/UserDashboard/Support/AnnouncementDetails"

// Learning Center
import LearningMaterials from "../components/UserDashboard/LearningCenter/LearningMaterials"
import LearningMaterialsDetails from "../components/UserDashboard/LearningCenter/LearningMaterialsDetails"

const routes = [

    // Cooming Sooon 
    {
        path: '/marketplace',
        component: MarketPlace,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/hirepurchase',
        component: HirePurchase,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/loan',
        component: Loan,
        meta: {
            requiresAuth: true
        }
    },

    // Authentication
    {
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
        path: '/termsCondition',
        component: TermsCondition,
        meta: {
            guest: true
        }
    },
    {
        path: '/privacyPolicy',
        component: PrivacyPolicy,
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

    // User Dashboard
    {
        path: '/userdashboard',
        component: UserDashboard,
        meta: {
            requiresAuth: true
        }
    },

    // Profile
    {
        path: '/basicprofile',
        component: BasicProfile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/upgrademembership',
        component: UpgradeMembership,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/updateprofile',
        component: UpdateProfile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/bkinfo',
        component: BankInfo,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/kyc',
        component: CompleteKYC,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/ChangePassword',
        component: ChangePassword,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/reSetpin',
        component: ResetPin,
        meta: {
            requiresAuth: true
        }
    },

    // Main Wallet
    {
        path: '/transfer',
        component: Transfer,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/withdraw',
        component: Withdraw,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/MainHistory",
        component: MainHistory,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/TopUpWallet",
        component: TopUpWallet,
        meta: {
            requiresAuth: true
        }
    },


    // mSave
    {
        path: '/savingshistory',
        component: SavingsHistory,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/TargetSavingsAction',
        component: TargetSavingsAction,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/TargetSavings",
        component: TargetSavings,
        meta: {
            requiresAuth: true
        }

    },

    // mInvest
    {
        path: '/viewinvestment',
        component: ViewInvestment,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/investmentreport',
        component: InvestmentReports,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/investmenthistory',
        component: InvestmentHistory,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/uploadinvestment',
        component: UploadInvestment,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/investmentDetails/:id",
        component: InvestmentDetails,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/investmentReportDetails/:id",
        component: InvestmentReportDetails,
        meta: {
            requiresAuth: true
        }
    },


    // mAjo
    {
        path: '/registeranagent',
        component: RegisterAgent,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/becomeanagent',
        component: BecomeAgent,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/breakajosavings',
        component: BreakAjo,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/credituser',
        component: CreditUsers,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/SetAjocycle',
        component: SetAjoCycle,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/AjoHistory',
        component: AjoHistory,
        meta: {
            requiresAuth: true
        }
    },

    // Support 
    {
        path: "/createticket",
        component: CreateTicket,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/inbox",
        component: Inbox,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/inboxDetails/:id",
        component: InboxDetails,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/announcement",
        component: Announcement,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/announcementDetails/:id",
        component: AnnouncementDetails,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/SentMessages",
        component: SentMessages,
        meta: {
            requiresAuth: true
        }
    },
    // Learning Center
    {
        path: "/learningmaterials",
        component: LearningMaterials,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/learningmaterialsdetails/:id",
        component: LearningMaterialsDetails,
        meta: {
            requiresAuth: true
        }

    }
]




export default routes;