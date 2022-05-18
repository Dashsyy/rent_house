import HtmlSettingCreate from '@modules/html_setting/CreateOrUpdate'

const routes = [
    {
        path: 'html_setting',
        name: 'html_setting',
        component: HtmlSettingCreate,
        meta: {
            title: 'HTML Setting',
            menu_key: 'html_setting',
        }

    },
    
];

export default routes;
