/*eslint no-empty-pattern: 0*/
import Vue from 'vue';
import router from '@/services/router';
import store from '@/modules/_store/index';
// import storeSimple from '@/modules/_store/actions';

let request = Vue.prototype.$request;

const UploadImages = async ({ }, data) => {
  request = Vue.prototype.$request;
  const response = await request.upload({
    url: '/v1/upload/files',
    data
  });
  return response;
};

const fetchDrawer = async ({ commit }, payload) => {
  commit('UPDATE_DRAWER', !!payload);
};

const fetchCurrentUser = async ({ commit }) => {
  request = Vue.prototype.$request;
  const response = await request.get({
    url: 'private/auth',
  });

  if (response.data.data) {
    commit('CURRENT_USER_LOGIN', response.data.data);
  }
}

const fetchUpdateProfile = async ({ commit }, data) => {
  const response = await request.post({
    url: 'private/profile/update',
    data
  });

  if (response.data.data) {
    commit('CURRENT_USER_LOGIN', response.data.data);
  }
}

const fetchChangePassword = async ({ }, data) => {
  const response = await request.post({
    url: 'private/change-password',
    data
  });

  return response;
}

const fetchSiteMasterMenu = async ({ commit }, params) => {

  commit('UPDATE_SITE_MASTER_MENU', []);
  commit('SET_IS_FETCHING_MASTER_MENU', true)

  request = Vue.prototype.$request;
  const response = await request.get({
    url: 'private/master_menus',
    params
  });

  if (response.data.data) {
    await commit('UPDATE_SITE_MASTER_MENU', response.data.data);
  }
  commit('SET_IS_FETCHING_MASTER_MENU', false)
}

async function setIsShowDynamicMenu({ commit, dispatch }, { site_id, is_change }) {
  await commit('SET_SELECTED_SITE_ID', site_id)
  await commit('UPDATE_IS_SHOW_DYNAMIC_MENU', !!site_id)
  if (site_id) {
    dispatch('fetchSiteMasterMenu', { site_id })
    if (is_change) {
      let routeName = router.currentRoute.name;

      if (subIsActive('/simple_filter')) {
        dispatch('getSimpleFilterData', { site_id });
        if (routeName != 'simple_filter') {
          router.push({ path: 'simple_filter' })
        }
      } else if (subIsActive('/advance-filter')) {
        dispatch('getAdvanceFilterData', { site_id });
        if (routeName != 'advance_filter') {
          router.push({ path: '/advance-filter' })
        }
      } else if (subIsActive('/master')) {
        dispatch('getMasterData', { site_id });
        if (routeName != 'dynamic_master') {
          router.push({ path: '/master' })
        }
      } else if (subIsActive('/template')) {
        dispatch('getTemplateData', { site_id });
        if (routeName != 'template') {
          router.push({ path: '/template' })
        }
      } else if (routeName != 'dashboard' && (routeName == 'site_master-data' | routeName == 'site_master-data-create' | routeName == 'site_master-data-update')) {
        router.push({ name: 'dashboard' })
      }
    }
  } else if (is_change) {
    router.push({ name: "site" });
  }
}

const subIsActive = (input) => {
  const paths = Array.isArray(input) ? input : [input]
  return paths.some(path => {
    return router.currentRoute.path.indexOf(path) === 0 // current path starts with this path string
  })
}

const getMasterData = async ({ commit }, params) => {
  request = Vue.prototype.$request;
  const { fullPath } = router.currentRoute;

  let url = `private/masters?`;
  if (fullPath && fullPath.includes('?')) {
    let queryUrl = fullPath.split('?');
    url = url + queryUrl[queryUrl.length - 1];
  }

  if (params && params.site_id) {
    url = url + (url.endsWith("&") || url.endsWith("?") ? "" : "&") + "site_id=" + params.site_id
  } else if (typeof router.currentRoute.query.site_id === 'undefined' && store.state.selectedSiteID) {
    url = url + (url.endsWith("&") || url.endsWith("?") ? "" : "&") + "site_id=" + store.state.selectedSiteID
  }

  let isDelete = false;
  if (typeof params != 'undefined' && params.is_delete == true) {
    isDelete = true;
    delete params.is_delete;
  }

  const response = await request.get({ url });

  if (response.data.data) {
    commit('UPDATE_MASTER_LIST_DATA', response.data.data);
    commit('UPDATE_MASTER_PAGINATION', response.data.meta.pagination)
  }

  if (response.data.data.length == 0) {
    if (isDelete === true) {
      router.push({ name: "dynamic_master" });
    } else {
      const queryParams = router.currentRoute.query;
      let lastPage = response.data.meta.pagination ? response.data.meta.pagination.last : '';
      if (queryParams && queryParams.page > lastPage) {
        const { query } = router;
        router.setQuery({ ...query, ...{ page: lastPage } });
      }
    }
  }
};

// Get simple filter setting list data by pagination
const getSimpleFilterData = async ({ commit }, params) => {
  request = Vue.prototype.$request;
  const { fullPath } = router.currentRoute;
  let url = `private/simple-filter-settings?`;

  if (fullPath && fullPath.includes('?')) {
    let queryUrl = fullPath.split('?');
    url = url + queryUrl[queryUrl.length - 1];
  }

  if (params && params.site_id) {
    url = url + (url.endsWith("&") || url.endsWith("?") ? "" : "&") + "site_id=" + params.site_id
  } else if (typeof router.currentRoute.query.site_id === 'undefined' && store.state.selectedSiteID) {
    url = url + (url.endsWith("&") || url.endsWith("?") ? "" : "&") + "site_id=" + store.state.selectedSiteID
  }

  let isDelete = false;
  if (typeof params != 'undefined' && params.is_delete == true) {
    isDelete = true;
    delete params.is_delete;
  }

  const response = await request.get({ url });
  const { data } = response;
  commit('UPDATE_SIMPLE_FILTER_LIST_DATA', data.data);
  commit('UPDATE_SIMPLE_FILTER_PAGINATION', data.meta.pagination);

  if (response.data.data.length == 0) {
    if (isDelete === true) {
      router.push({ name: "simple_filter" });
    } else {
      const queryParams = router.currentRoute.query;
      let lastPage = response.data.meta.pagination ? response.data.meta.pagination.last : '';
      if (queryParams && queryParams.page > lastPage) {
        const { query } = router;
        router.setQuery({ ...query, ...{ page: lastPage } });
      }
    }
  }
}

const getAdvanceFilterData = async ({ commit }, params) => {
  let request = Vue.prototype.$request;
  const { fullPath } = router.currentRoute;
  let url = `private/advance-filter-setting?`;

  if (fullPath && fullPath.includes('?')) {
    let queryUrl = fullPath.split('?');
    url = url + queryUrl[queryUrl.length - 1];
  }

  if (params && params.site_id) {
    url = url + (url.endsWith("&") || url.endsWith("?") ? "" : "&") + "site_id=" + params.site_id
  } else if (typeof router.currentRoute.query.site_id === 'undefined' && store.state.selectedSiteID) {
    url = url + (url.endsWith("&") || url.endsWith("?") ? "" : "&") + "site_id=" + store.state.selectedSiteID
  }

  let isDelete = false;
  if (typeof params != 'undefined' && params.is_delete == true) {
    isDelete = true;
    delete params.is_delete;
  }

  let response = await request.get({ url })
  const { data } = response;
  commit('UPDATE_ADVANCE_FILTER_LIST_DATA', data.data)
  commit('UPDATE_ADVANCE_FILTER_PAGINATION', data.meta.pagination);

  if (response.data.data.length == 0) {
    if (isDelete === true) {
      router.push({ name: "dynamic_master" });
    } else {
      const queryParams = router.currentRoute.query;
      let lastPage = response.data.meta.pagination ? response.data.meta.pagination.last : '';
      if (queryParams && queryParams.page > lastPage) {
        const { query } = router;
        router.setQuery({ ...query, ...{ page: lastPage } });
      }
    }
  }
}

// Get template list data by pagination
const getTemplateData = async ({ commit }, params) => {
  request = Vue.prototype.$request;
  const { fullPath } = router.currentRoute;
  let url = `private/templates?`;

  if (fullPath && fullPath.includes('?')) {
    let queryUrl = fullPath.split('?');
    url = url + queryUrl[queryUrl.length - 1];
  }

  if (params && params.site_id) {
    url = url + (url.endsWith("&") || url.endsWith("?") ? "" : "&") + "site_id=" + params.site_id
  } else if (typeof router.currentRoute.query.site_id === 'undefined' && store.state.selectedSiteID) {
    url = url + (url.endsWith("&") || url.endsWith("?") ? "" : "&") + "site_id=" + store.state.selectedSiteID
  }

  let isDelete = false;
  if (typeof params != 'undefined' && params.is_delete == true) {
    isDelete = true;
    delete params.is_delete;
  }

  const response = await request.get({ url });
  const { data } = response;
  commit('UPDATE_TEMPLATE_LIST_DATA', data.data);
  commit('UPDATE_TEMPLATE_PAGINATION', data.meta.pagination);

  if (response.data.data.length == 0) {
    if (isDelete === true) {
      router.push({ name: "template" });
    } else {
      const queryParams = router.currentRoute.query;
      let lastPage = response.data.meta.pagination ? response.data.meta.pagination.last : '';
      if (queryParams && queryParams.page > lastPage) {
        const { query } = router;
        router.setQuery({ ...query, ...{ page: lastPage } });
      }
    }
  }
}

const fetchOptions = async ({ commit, getters }, params) => {
  request = Vue.prototype.$request;
  let url = 'private/common';
  if (getters.getIsSiteAdmin) {
    delete params['is_site']
  }

  const response = await request.get({ url, params });
  commit('UPDATE_MASTER_DATA', response.data.data)

  return response.data.data;
}

export default {
  fetchDrawer,
  UploadImages,
  fetchCurrentUser,
  fetchUpdateProfile,
  fetchChangePassword,
  fetchSiteMasterMenu,
  setIsShowDynamicMenu,

  /**
   * action for load masterData
   */
  fetchOptions,
  getSimpleFilterData,
  getAdvanceFilterData,
  getMasterData,
  getTemplateData
};
