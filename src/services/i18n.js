import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../i18n';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);
Vue.$cookies.config('7d');

Vue.use(VueI18n);
const lang = Vue.$cookies.get('local-flexible');
const i18n = new VueI18n({
	locale: lang ? lang : 'ja',
	fallbackLocale: 'ja',
	messages
});

export default i18n;
