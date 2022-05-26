const routes = [
    {
        path:'/reports',
        name:"report_details",
        component: () => import('@modules/reports/reportDetail')
    }
]

export default routes