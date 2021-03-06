// 404
import NotFound from "../components/GLayouts/NotFound"

// Cooming Soon

// import HirePurchase from "../components/UserDashboard/Cooming/HirePurchase"


// Authentication
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import ForgotPassword from '../components/Auth/ForgotPassword'
import Welcome from '../components/Auth/Welcome'
import Recover from '../components/Auth/Recover'
import Initial from '../components/Auth/Initial'
import TermsCondition from "../components/Auth/TermsCondition"
import PrivacyPolicy from "../components/Auth/PrivacyPolicy"
import AboutMomentum from "../components/Auth/AboutMomentum"

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
import RemoveAgent from "../components/UserDashboard/MAjo/RemoveAgent"

// mInvest
import InvestmentReports from "../components/UserDashboard/MInvest/InvestmentReport"
import InvestmentHistory from "../components/UserDashboard/MInvest/InvestmentHistory"
import UploadInvestment from "../components/UserDashboard/MInvest/UploadInvestment"
import InvestmentReportDetails from "../components/UserDashboard/MInvest/InvestmentReportDetails"
import MyInvestments from "../components/UserDashboard/MInvest/MyInvestments"
// Investment Categories
import AllInvestment from "../components/UserDashboard/MInvest/categories/All"
import Agriculture from "../components/UserDashboard/MInvest/categories/Agriculture"
import Transportation from "../components/UserDashboard/MInvest/categories/Transportation"
import Others from "../components/UserDashboard/MInvest/categories/Others"

// Investment Categories detail
import AgrInvestmentDetails from "../components/UserDashboard/MInvest/details/AgrInvestmentDetails"
import TransInvestmentDetails from "../components/UserDashboard/MInvest/details/TransInvestmentDetails"
import Details from "../components/UserDashboard/MInvest/details/Details"
import OthersInvestmentDetails from "../components/UserDashboard/MInvest/details/OthersInvestmentDetails"


// mLoan
import QuickLoan from "../components/UserDashboard/mLoan/QuickLoan"
import BusinessLoan from "../components/UserDashboard/mLoan/BusinessLoan"
import LoanHistory from "../components/UserDashboard/mLoan/History"

// mBills
import Airtime from "../components/UserDashboard/mBills/Airtime"
import DataSub from "../components/UserDashboard/mBills/DataSub"
import CableTv from "../components/UserDashboard/mBills/CableTv"
import Power from "../components/UserDashboard/mBills/Power"


// College Of Money
import LearningMaterials from "../components/UserDashboard/LearningCenter/LearningMaterials"
import LearningMaterialsDetails from "../components/UserDashboard/LearningCenter/LearningMaterialsDetails"

// Support 
import CreateTicket from "../components/UserDashboard/Support/CreateTicket"
import Inbox from "../components/UserDashboard/Support/Inbox"
import Announcement from "../components/UserDashboard/Support/Announcement"
import SentMessages from "../components/UserDashboard/Support/SentMessages"
import InboxDetails from "../components/UserDashboard/Support/InboxDetails"
import AnnouncementDetails from "../components/UserDashboard/Support/AnnouncementDetails"



const routes = [
    // 404
    {
        path: "*",
        component: NotFound
    },

    // Cooming Sooon 

    /*  {
         path: '/hirepurchase',
         component: HirePurchase,
         meta: {
             requiresAuth: true
         }
     }, */

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
        path: '/aboutMomentum',
        component: AboutMomentum,
        meta: {
            guest: true
        }
    },
    {
        path: "/recover",
        component: Recover,
        meta: {
            recover: true
        }
    },
    {
        path: "/initial",
        component: Initial,
        meta: {
            initail: true
        }
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
        component: AllInvestment,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/viewinvestmentAgric',
        component: Agriculture,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/viewinvestmentTrans',
        component: Transportation,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/viewinvestmentOthers',
        component: Others,
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
        path: '/myInvestments',
        component: MyInvestments,
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
        path: "/agrinvestmentDetails/:id",
        name: 'AgrInvestmentDetails',
        component: AgrInvestmentDetails,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/transinvestmentDetails/:id",
        name: 'TransInvestmentDetails',
        component: TransInvestmentDetails,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/allDetails/:id",
        name: 'Details',
        component: Details,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/otherinvestmentDetails/:id",
        name: 'OtherInvestmentDetails',
        component: OthersInvestmentDetails,
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
    {
        path: '/removeagent',
        component: RemoveAgent,
        meta: {
            requiresAuth: true
        }
    },

    // mLoan
    {
        path: '/quickloan',
        component: QuickLoan,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/businessloan',
        component: BusinessLoan,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/loanHistory',
        component: LoanHistory,
        meta: {
            requiresAuth: true
        }
    },

    // mBills
    {
        path: '/airtime_topup',
        component: Airtime,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/data_subs',
        component: DataSub,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/cable_tv',
        component: CableTv,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/electricity',
        component: Power,
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