const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component:() => import('@modules/dashboard/DashboardIndex')
    }
]

export default routes