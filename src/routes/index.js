import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'

// Layout
import { ProfileLayout } from "../components/Layout"
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following, layout: null},
    {path: '/profile', component: Profile, layout: ProfileLayout},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}