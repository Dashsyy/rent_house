import User from '@/modules/user';

const routes = [
	{
		path: 'user',
		name: 'user',
		component: User,
		meta: {
            title: 'User',
			menu_key: 'user'
        },
	}
];

export default routes;
