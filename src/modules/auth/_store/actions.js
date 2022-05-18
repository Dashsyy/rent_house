import Vue from "vue";
let request = Vue.prototype.$request;

const fetchLogout = async () => {
    request = Vue.prototype.$request;

    await request.post({
        url: "private/logout"
    });
}

const login = async ({ commit }, payload) => {
    request = Vue.prototype.$request;
    const {email, password} = payload;
    const response = await request.post({
        url: 'public/login',
        data: {email, password}
    });

    if (response.data.data) {
        commit('UPDATE_AUTHENTICATED_USER', response.data.data);
    }

    return response;
}

export default {
    fetchLogout,
    login
}
