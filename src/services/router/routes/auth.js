const routes = [
    {
        path: '/login',
        name: 'login',
        component:() => import('@/components/layout/AuthLayout')
    }
]

export default routes