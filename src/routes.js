import Login  from './view/Login'
import Dashboard  from './view/Dashboard'
import Rating  from './view/Rating'
import Leaderboard  from './view/Leaderboard'
import Profile  from './view/Profile'
import Test  from './view/Test'

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
    }
]

export default routes