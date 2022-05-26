const routes = [
    {
        path: '/register-user',
        name: 'register_user',
        component:() => import('@modules/user/registerUser')
    }
]

export default routes