import {notification, Modal} from "ant-design-vue";
import router from "./router";
import Vue from "vue";
import store from './store'
import i18n from '@/services/i18n'

export const generateErrorNotify = (title, desc) => {
  let msg = i18n.t(`message.error.${title}`);

  if (msg.includes(`message.error.${title}`)) {
    msg = title;
  }
  notification.error({
    message: msg,
    description: desc,
    onClick: () => {
      Vue.cookies.remove("error");
    }
  });
  setTimeout(() => {
    // Vue.cookies.remove("error");
  }, 3000);
};

export const generateNotify = (type, title, desc) => {
  let msg = i18n.t(`message.${type}.${title}`);

  if (msg.includes(`message.${type}.${title}`)) {
    msg = title;
  }
  notification[type]({
    message: msg,
    description: desc
  });
};

export const generateModal = (type, title, desc, func) => {
  Modal[type]({
    title: title,
    content: desc,
    onOk: () => {
      func();
    }
  });
};

export const handleError = error => {
  let errorCode = typeof error != 'undefined' ? error.status : '';
  let method =  typeof error != 'undefined' ? error.config.method : '';

  if (errorCode == 413) {
    generateErrorNotify(error.data.meta.message);
  }
  else if (errorCode == 412) {
    generateErrorNotify(error.data.meta.message);
    let siteId =  Vue.$cookies.get('selected_site_id') + '';
    
    if (siteId) {
      router.push({name: "site-update", params: { site_id: siteId, is_error_db_setting: true }});
     
    } else {
      router.push({name: "site"});
    }
    
  } else if (errorCode == 401) {
    const allCookies = Vue.$cookies.keys();
    allCookies.forEach(cookie => Vue.$cookies.remove(cookie));
    Vue.$cookies.remove("error");

    if (error.data === 'unpublish' )
      generateModal("warning","Session expired.", null, () => {
        router.push({name: "login"});
        Modal.destroyAll()
      });
    else
      router.push({name: "login"});

    setTimeout(() => {
      Vue.$cookies.remove("error");
    }, 3000);

  } else if (errorCode == 403) {
    const {is_admin} = store.state['$_modules'].authenticatedUser
    if(is_admin) router.push({name: "user"});
    generateErrorNotify("Unauthorized action");
  } else if (errorCode == 404) {
    generateErrorNotify(error.data.meta.message);
  } else if (errorCode == 422) {
    return false;
  } else if (errorCode == 423) {
    generateErrorNotify(error.data.meta.message);
  } else if (errorCode == 503) {
    generateErrorNotify(error.data.meta.message);
  } else if (errorCode >= 500 && errorCode <= 599) {
    generateErrorNotify("Internal Server Error");
  } else if (method == 'post') {
    generateErrorNotify("create");
  } else if (method == 'put') {
    generateErrorNotify("update");
  } else if (method == 'delete') {
    generateErrorNotify("delete");
  } else {
    generateErrorNotify("There is something error.");
  }
};
