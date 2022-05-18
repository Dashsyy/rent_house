import SimpleFilter from '@/modules/simple_filter';
import SimpleFilterCreate from '@/modules/simple_filter/CreateOrUpdate';

const routes = [
	{
		path: 'simple_filter',
		name: 'simple_filter',
		component: SimpleFilter,
		meta: {
            title: 'Simple Filter',
			menu_key: 'simple_filter',
        }
	},
	{
		path: 'simple_filter/create',
		name: 'simple_filter-create',
		component: SimpleFilterCreate,
		meta: {
            title: 'Simple Filter - Create',
			menu_key: 'simple_filter',
        }
	},
	{
		path: 'simple_filter/:id',
		name: 'simple_filter-update',
		component: SimpleFilterCreate,
		meta: {
            title: 'Simple Filter - Update',
			menu_key: 'simple_filter',
        }
	},
];

export default routes;