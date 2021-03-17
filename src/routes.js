import Login  from './view/Login'
import Dashboard  from './view/Dashboard'
import Rating  from './view/Rating'
import Leaderboard  from './view/Leaderboard'
import Profile  from './view/Profile'
import Test  from './view/Test'
import News from './view/News'
import News_details from './view/News_details'
const routes = [
    {
        'name': 'Login',
        'path': '/',
        'component': Login
    },
    {
        'name': 'Dashboard',
        'path': '/Dashboard',
        'component': Dashboard
    },
    {
        'name': 'Rating',
        'path': '/Rating',
        'component': Rating
    },
    {
        'name': 'Leaderboard',
        'path': '/Leaderboard',
        'component': Leaderboard
    },
    {
        'name': 'Profile',
        'path': '/Profile',
        'component': Profile
    }, {
        'name': 'Test',
        'path': '/Test',
        'component': Test
    }, {
        'name': 'News',
        'path': '/News',
        'component': News
    }, {
        'name': 'News_details',
        'path': '/News_details',
        'component': News_details
    }
]

export default routes