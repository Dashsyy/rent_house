import Vue from 'vue';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import i18n from "@services/i18n.js";

function loadLocale(code) {
  return import(`vee-validate/dist/locale/${code}.json`).then((locale) => {
    localize(code, locale);
  });
}
const currentLang = process.env.VUE_APP_LOCALE ?? 'ja';
loadLocale(currentLang);

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

extend('alpha_undsc', {
  validate(value) {
    const regex = new RegExp("^[a-z_]{2,20}$");
    return regex.test(value)
  },
  message: i18n.t("validation.vee-validate.alpha_undsc"),
})

extend('excluded_special_fields', {
  validate(value) {
    let specialFields = ['id', 'created_at', 'updated_at', 'deleted_at']
    return !specialFields.includes(value)
  },
  message: i18n.t("validation.vee-validate.excluded_special_fields"),
})

extend('domain_name', {
  validate(value) {
    /**
     * It can be : min str length = > 3, max str length => 253
     * something.something
     * something.something.something
     * something.something.something.something
     */
    const regex = new RegExp("^(?!http|www)(?=.{3,253}$)([a-zA-Z0-9][a-zA-Z0-9_@:/#&-]{0,62}(\\.)[a-zA-Z0-9_@/#&+-]{1,63}){1,3}$");
    return regex.test(value)
  },
  message: i18n.t("validation.vee-validate.domain_name"),
})

extend('distinct', {
  validate(value, evt) {
    return !evt.includes(value)
  },
  message: i18n.t("validation.vee-validate.distinct"),
})
extend("float", {
  validate: (value, { decimals = '*', separator = '.' } = {}) => {
    if (value === null || value === undefined || value === '') {
      return {
        valid: false
      };
    }
    if (Number(decimals) === 0) {
      return {
        valid: /^-?\d*$/.test(value),
      };
    }
    const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`;
    const regex = new RegExp(`^[-+]?\\d*(\\s*\\d)(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`);

    return {
      valid: regex.test(value),
    };
  },
  message: i18n.t("validation.vee-validate.float")
})

extend('slug', {
  validate(value) {
    const regex = new RegExp("^[a-zA-Z0-9_-]{0,}$");
    return regex.test(value)
  },
  message: i18n.t("validation.vee-validate.slug"),
})

extend('short_code', {
  validate(value) {
    let specialShortCode = ['SLUG', 'ID', 'PAGE_VIEW'];
    
    if (specialShortCode.includes(value)) {
      return false;
    }
    const regex = new RegExp("^([A-Z]([A-Z0-9_]{0,})[A-Z0-9]+)$");
    return regex.test(value)
  },
  message: i18n.t("validation.vee-validate.short_code"),
})

extend("afterDate", {
  params:['start'],
  validate: (value, {start}) => {
    if (start === null || start === undefined || start === '')
      return {
        valid: true
      };

    return {
      valid: value.valueOf() >= start.valueOf()
    }
  },
  message: (field, {start}) => {
    return i18n.t("validation.vee-validate.afterDate", {
      _field_: field,
      _other_: start
    })
  },
})

extend("beforeDate", {
  params:['end'],
  validate: (value, { end }) => {
    if (end === null || end === undefined || end === '')
        return {
          valid: true
        };

    return {
      valid: value.valueOf() <= end.valueOf() 
    };
  },
  message: (field, {end}) => {
    return i18n.t("validation.vee-validate.beforeDate", {
      _field_: field,
      _other_: end
    })
  },
})

extend('url', {
  validate(value) {
    /**
     * URL is valid follow by this pattern (https://www.car.com...) || (https://car.com...)
     */
    const regex = new RegExp("^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)");
    return regex.test(value)
  },
  message: i18n.t("validation.vee-validate.header_footer_url"),
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

