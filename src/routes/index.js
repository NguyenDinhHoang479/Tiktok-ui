import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import routeConfig from '../config/routes'

// Layout
import { ProfileLayout } from "../components/Layout"
const publicRoutes = [
    {path: routeConfig.home, component: Home},
    {path: '/following', component: Following, layout: null},
    {path: routeConfig.profile, component: Profile, layout: ProfileLayout},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}