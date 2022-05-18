import * as moment from 'moment';
import { notification } from "ant-design-vue";
import i18n from '@/services/i18n'

export default {
  methods: {
    getAge(dob) {
      var a = moment();
      var b = moment(dob, 'YYYY');
      const age = a.diff(b, 'years');
      return age;
    },
    convertDate(date, format) {
      const defalut = 'YYYY-MM-DD';
      let newDate = new Date(date);
      newDate = moment(newDate).format(format ? format : defalut);
      return newDate;
    },
    defaultPrice(price, format) {
      const newprice = price ? price : '';
      if (format) {
        return newprice + format;
      }
      return newprice + '$';
    },
    clearData(data) {
      for (const item in data) {
        data[item] = null
        if (item == 'status') data[item] = 'publish'
      }
      return data;
    },
    clearDataNestedArr(data) {
      for (const item in data) {
        data[item] = ""
        if (item == "db_settings") data[item] = {
          'host': "",
          'port': "",
          'driver': "",
          'prefix': "",
          'schema': "",
          'charset': "",
          'collation': "",
          'database': "",
          'username': "",
          'password': "",
        }
        if (item == 'status') data[item] = 'publish'
      }
      return data;
    },
    responseError(error, e) {
      let errorData = error;
      if (e.response && e.response.data.meta) {
        let errorMessages = Object.assign({}, e.response.data.meta.errors);
        Object.entries(errorMessages).forEach(([key, value]) => {
          errorData[key] = value[0];
        });
      }
      return errorData;
    },
    generateNotify(type, title) {
      let msg = i18n.t(`message.${type}.${title}`);
      if (msg.includes(`message.${type}.${title}`)) {
        msg = title;
      }
      notification[type]({
        message: msg
      });
    },
    isEmptyData(data) {
      let isEmpty = false
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'id' && !value) {
          isEmpty = true
        }
      });
      return isEmpty;
    },
    copyToClipboard(textToCopy) {
      // navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
          // navigator clipboard api method'
          return navigator.clipboard.writeText(textToCopy);
      } else {
          // text area method
          let textArea = document.createElement("textarea");
          textArea.value = textToCopy;
          // make the textarea out of viewport
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          return new Promise((res, rej) => {
              // here the magic happens
              document.execCommand('copy') ? res() : rej();
              textArea.remove();
          });
      }
    },
    copyObject(obj) {
      return JSON.parse(JSON.stringify(obj))
    },
    scrollToElement(element) {
      if (typeof element == 'string') {
        element = this.$el.querySelector(element)
      }
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        })
      }
    }
  }
};
