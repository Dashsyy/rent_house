const routes = [
    {
        path: '/login',
        name: 'Login',
        component:() => import('@/components/layout/AuthLayout')
    }
]

export default routes