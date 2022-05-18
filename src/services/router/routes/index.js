import Layout from '@/layouts';
import Auth from '@/modules/auth';
import LayoutAuth from '@/layouts/auth';


const requireRoute = require.context('.', false, /\.js$/);
const _PREFIX = process.env.VUE_APP_URL_PREFIX;


const routes = [
	{
		path: _PREFIX,
		component: Layout,
		children: []
	},
	{
		path: _PREFIX,
		component: LayoutAuth,
		children: [
			{
				path: 'login',
				name: 'login',
				component: Auth,
			}
		]
	},
	{
		path: '*',
		component: () => import('@/modules/NotFound.vue')
	}
]

requireRoute.keys().forEach((fileName) => {
	if (fileName === './index.js') {
		return;
	}
	const route = requireRoute(fileName).default;
	routes[0].children.push(...route);
});

export default routes;
