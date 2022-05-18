import Site from '@/modules/site';
import Wrapper from '@/Wrapper';
import MasterMenuData from '@/modules/master_menu_data';
import CreateUpdate from '@/modules/site/_components/CreateUpdate';
import Detail from '@/modules/site/_components/Detail';
import CreateDataTable from '@/modules/master_menu_data/CreateOrUpdate';


const routes = [
	{
		path: 'site',
		name: 'site',
		component: Site,
		meta: {
            title: 'Site',
			menu_key: 'site',
        }
	},
	{
        path: 'site/create',
        name: 'site-create',
        component: CreateUpdate,
		meta: {
            title: 'Site - Create',
			menu_key: 'site',
        }
    },
	{
		path: 'site/:site_id',
		component: Wrapper,
		children: [
			{
				path: '',
				name: 'site-detail',
				component: Detail,
				meta: {
					title: 'Site - Detail',
					menu_key: 'site',
				},
			},
			{
				path: 'edit',
				name: 'site-update',
				component: CreateUpdate,
				meta: {
					title: 'Site - Update',
					menu_key: 'site',
				}
			},
			{
				path: 'menu/:selected_master_id',
				name: 'site_master-data',
				component: MasterMenuData
			},
			{
				path: 'menu/:selected_master_id/create',
				name: 'site_master-data-create',
				component: CreateDataTable
			},
			{
				path: 'menu/:selected_master_id/update/:id',
				name: 'site_master-data-update',
				component: CreateDataTable
			}
		]
	},
];


export default routes;
