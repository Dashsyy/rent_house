import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes],
});

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

router.setQuery = function (params) {
  let query = {}
  let oldQuery = this.currentRoute.query;

  let resetPage = false;
  for (let key in params) {
    if (params[key]) {
      query[key] = params[key]
    }
    if (key != 'page' && key != 'limit' && resetPage == false) {
      let oldParam = oldQuery[key] ? oldQuery[key] + '' : '';
      let newParam = params[key] ? params[key] + '' : '';

      if (oldParam != newParam) {
        resetPage = true;
      }
    }
  }
  if (resetPage) {
    delete query['page'];
    delete query['limit'];
  }

  this.push({ query }).catch(() => { })
}

router.getQuery = function (filter) {
  let query = router.currentRoute.query;
  let queryValue = null
  let filterValue = null
  let isFilterValueArray = false

  for (let key in filter) {
    queryValue = query[key]
    filterValue = filter[key]
    isFilterValueArray = Array.isArray(filterValue)

    if (queryValue) {
      if (isFilterValueArray) {
        if (Array.isArray(queryValue)) {
          filter[key] = queryValue
        } else {
          filter[key] = [queryValue]
        }
      } else {
        if (typeof filterValue == 'number') {
          filter[key] = queryValue - 0
        } else {
          filter[key] = queryValue + ''
        }
      }
    } else {
      if (isFilterValueArray) {
        filter[key] = []
      } else {
        filter[key] = ''
      }
    }
  }
  return filter
}

router.beforeEach((to, from, next) => {
  const token = Vue.$cookies.get('token');
  // const user  = Vue.$cookies.get('user');

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = process.env.VUE_APP_NAME + " | " + nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = process.env.VUE_APP_NAME + " | " + previousNearestWithMeta.meta.title;
  } else if (!nearestWithMeta) {
    document.title = process.env.VUE_APP_NAME;
  }
  const user = Vue.$cookies.get('user');
  if (!token && to.name !== 'login') {
    next({ name: 'login' });
  } else if (token && (to.name === 'login' || to.path === '/')) {
    if (user.is_admin) {
      next({ name: 'user' });
    } else {
      next({ name: "dynamic_master" });
    }
  } else {
    next();
  }
});

export default router;
