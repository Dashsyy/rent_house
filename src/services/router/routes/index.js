import Layout from "@/layouts/LayoutIndex";
import AuthLayout from './auth.js'

const requireRoute = require.context(".", false, /\.js$/);
const _PREFIX = process.env.VUE_APP_URL_PREFIX ?? "";
const routes = [
  ...AuthLayout,
  {
    path: _PREFIX,
    component: Layout,
    children: [],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/modules/error/NotFound.vue')
    // component: () => import('@/components/layout/AuthLayout')
  }
];

requireRoute.keys().forEach((fileName) => {
  if (fileName === "./index.js") {
    return;
  }
  else if (fileName != './auth.js') {
    const route = requireRoute(fileName).default;
    routes[1].children.push(...route);
  }
});

export default routes;
