const routes = [
    {
        path:'/reports',
        name:"Reports",
        component: () => import('@modules/reports/reportDetail')
    }
]

export default routes