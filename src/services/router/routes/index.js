import Layout from "@/layouts/LayoutIndex";

const requireRoute = require.context(".", false, /\.js$/);
const _PREFIX = process.env.VUE_APP_URL_PREFIX ?? "";
const routes = [
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
  const route = requireRoute(fileName).default;
  routes[0].children.push(...route);
});

export default routes;
