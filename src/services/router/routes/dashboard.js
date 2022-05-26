const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component:() => import('@modules/dashboard/DashboardIndex')
    }
]

export default routes