import Login  from './view/Login'
import Dashboard  from './view/Dashboard'

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
    }
]

export default routes