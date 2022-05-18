import Vue from "vue";

const UPDATE_DRAWER = (state, data) => {
  state.drawer = data;
};

const CURRENT_USER_LOGIN = (state, data) => {
  state.authenticatedUser = data;
  state.masterData.sites  = data.sites.map(el => {
    return {
      id: el.id,
      name: el.name
    }
  })
};

const UPDATE_SITE_MASTER_MENU = (state, data) => {
  state.siteMasterMenus = data;
};

const UPDATE_IS_SHOW_DYNAMIC_MENU = (state, val) => {
  state.isShowDynamicMenu = val
}

const SET_IS_FETCHING_MASTER_MENU = (state, val) => {
  state.isFetchingMasterMenu = val
}

function UPDATE_MASTER_DATA(state, val) {
  for(let key in val) {
    state.masterData[key] = val[key]
  }
}


const UPDATE_MASTER_LIST_DATA = (state, val) => state.masterListData = val;
const UPDATE_MASTER_PAGINATION = (state, val) => state.masterPagination = val;

const UPDATE_SIMPLE_FILTER_LIST_DATA = (state, val) => state.simpleFilterListData = val;
const UPDATE_SIMPLE_FILTER_PAGINATION = (state, val) => state.simpleFilterPagination = val;

const UPDATE_ADVANCE_FILTER_LIST_DATA = (state, val) => state.advanceFilterListData = val;
const UPDATE_ADVANCE_FILTER_PAGINATION = (state, val) => state.advanceFilterPagination = val;

const UPDATE_TEMPLATE_LIST_DATA = (state, val) => {
  state.templateListData = val.map(el => {
    el.is_build_progress = false
    return el
  })
};
const UPDATE_TEMPLATE_PAGINATION = (state, val) => state.templatePagination = val;
const SET_TEMPLATE_IS_BUILD_PROGRESS = (state, {id, value}) => {
  for (let index = 0; index < state.templateListData.length; index++) {
    if (state.templateListData[index].id == id) {
      state.templateListData[index].is_build_progress = value
    }
  }
}

/**
 * selected site from header or from site list
 */
function SET_SELECTED_SITE_ID(state, val) {
  state.selectedSiteID = val
  if (val && val !== null && val != 'null' && val != undefined) {
    Vue.$cookies.set('selected_site_id', val)
  } else {
    Vue.$cookies.remove('selected_site_id')
  }
}

export default {
  UPDATE_DRAWER,
  CURRENT_USER_LOGIN,
  UPDATE_SITE_MASTER_MENU,
  UPDATE_IS_SHOW_DYNAMIC_MENU,
  SET_IS_FETCHING_MASTER_MENU,
  UPDATE_MASTER_DATA,
  SET_SELECTED_SITE_ID,

  UPDATE_MASTER_LIST_DATA,
  UPDATE_MASTER_PAGINATION,
  UPDATE_SIMPLE_FILTER_LIST_DATA,
  UPDATE_SIMPLE_FILTER_PAGINATION,
  UPDATE_ADVANCE_FILTER_LIST_DATA,
  UPDATE_ADVANCE_FILTER_PAGINATION,
  UPDATE_TEMPLATE_LIST_DATA,
  UPDATE_TEMPLATE_PAGINATION,
  SET_TEMPLATE_IS_BUILD_PROGRESS
};
