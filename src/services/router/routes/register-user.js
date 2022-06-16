const routes = [
    {
        path: '/register-user',
        name: 'Register User',
        component:() => import('@modules/user/registerUser')
    }
]

export default routes