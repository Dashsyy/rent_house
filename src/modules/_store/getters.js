const getDrawer = (state) => state.drawer;
const getAuthenticatedUser = (state) => state.authenticatedUser;

function getIsAdmin(state) {
  let user = state.authenticatedUser
  if (user && (user.is_admin == true)) {
    return true
  }
  return false
}

function getIsSiteAdmin(state) {
  let user = state.authenticatedUser
  if (user && (user.is_admin == false)) {
    return true
  }
  return false
}

function getSites(state) {
  let user = state.authenticatedUser
  if (user) {
    return user.sites
  }
  return []
}


const getMasterListData = (state) => state.masterListData;
const getMasterListPagination = (state) => state.masterPagination;

const getSimpleListData = (state) => state.simpleFilterListData;
const getSimpleListPagination = (state) => state.simpleFilterPagination;

const getAdvanceFilterListData = (state) => state.advanceFilterListData;
const getAdvanceFilterListPagination = (state) => state.advanceFilterPagination;

const getTemplateListData = (state) => state.templateListData;
const getTemplateListPagination = (state) => state.templatePagination;


export default {
  getDrawer,
  getAuthenticatedUser,
  getIsAdmin,
  getIsSiteAdmin,
  getSites,

  getMasterListData,
  getMasterListPagination,
  getSimpleListData,
  getSimpleListPagination,
  getAdvanceFilterListData,
  getAdvanceFilterListPagination,
  getTemplateListData,
  getTemplateListPagination
};
