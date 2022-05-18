import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  drawer: false,
  authenticatedUser: null,
  sites: null,
  siteMasterMenus: [],
  isShowDynamicMenu: false,
  isFetchingMasterMenu: false,
  masterListData: [],
  masterPagination: [],
  simpleFilterListData: [],
  simpleFilterPagination: [],
  advanceFilterListData: [],
  advanceFilterPagination: [],
  templateListData: [],
  templatePagination: [],

  /**
   * selected site from header or from site list
   */
  selectedSiteID: null,
  selectedSite: {},

  masterData: {
    users: [],
    sites: [],
    masters: [],
    templates: [],
    user_roles: [],
    master_fields: [],
    advance_filter_input_types: [],
    advance_filter_operators: [],
    advance_filter_value_types: [],

    master_field_input_types: [],
    master_field_input_value_types: {},
    master_field_data_types: [],
    master_field_data_type_lengths: {},
    master_field_value_types: [],
    master_field_data_sources: [],
    master_field_requireds: [],
    master_field_display_in_lists: [],
    booleans: [],
    is_main_content_exist: false,
    /**
     * No need to request again, the statuses already load when application first start.
     * Check  => layout/index.vue
     */
    statuses: []
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
