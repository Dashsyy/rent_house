<template>
  <div class="flex justify-center items-center login-full-h">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form shadow-lg bg-white p-12 rounded"
      @submit="handleSubmit"
    >
      <div class="flex justify-between title-login">
        <h1 class="text-black flex items-center text-11 font-bold">
          {{ $t("title.login") }}
        </h1>
      </div>
      <div class="l-border my-10"></div>
      <div class="text-danger flex justify-center mb-7" v-if="errorMassage">
        {{ errorMassage }}
      </div>
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                {
                  required: true,
                  message: $t('validation.required.email'),
                },
              ],
            },
          ]"
          :placeholder="$t('placeholder.input.email')"
          size="large"
          @input="(error.email = null), (errorMassage = null)"
        >
          <a-icon
            slot="prefix"
            type="mail"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
        <div class="mt-3 text-danger" v-if="error.email">
          {{ error.email }}
        </div>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: $t('validation.required.password') },
              ],
            },
          ]"
          type="password"
          :placeholder="$t('placeholder.input.password')"
          size="large"
          @input="(error.password = null), (errorMassage = null)"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
        <div class="mt-3 text-danger" v-if="error.password">
          {{ error.password }}
        </div>
      </a-form-item>
      <a-form-item>
        <a-button
          :loading="loading"
          html-type="submit"
          size="large"
          class="
            login-form-button
            bg-slide
            text-white
            focus:bg-slide
            hover:bg-slide hover:text-white
            focus:text-white
          "
        >
          {{ $t("button.login") }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      errorMassage: null,
      error: {
        email: null,
        password: null,
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  mounted() {
    const prefix =
      process.env.VUE_APP_NAME === undefined
        ? ""
        : process.env.VUE_APP_NAME + " - ";
    document.title = prefix + this.$t(`title.page.login`);
  },
  computed: {
    ...mapGetters("$_auth", ["getAthenticatedUser"]),
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.submitLogin(values);
        }
      });
    },
    async submitLogin(values) {
      this.loading = true;
      try {
        const response = await this.login(values);
        const { data } = response;
        if (data.meta.code !== 200) {
          this.errorMassage = data.meta.message;
        } else if (data.data.token) {
          let user = data.data
          this.$cookies.set("token", user.token);
          delete user['token']
          this.$cookies.set("user", user)
          if (user.is_admin != true) {
            this.$cookies.set('selected_site_id', user.site_id)
          }
          this.$cookies.set('local-flexible', data.data.language)
          this.$root.$i18n.locale = data.data ? data.data.language : 'ja'
          let redirect_name = 'dashboard'
          this.$router.push({ name: redirect_name });
        }
      } catch (error) {
        this.error = this.responseError(this.error, error);
      } finally {
        this.loading = false;
      }
    },
    ...mapActions("$_auth", ["login"]),
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 80%;
  min-width: 300px;
  max-width: 500px;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.login-full-h {
  height: calc(100vh - 65px);
}

.title-login {
  img {
    width: 56px;
  }
}

.l-border {
  width: 100%;
  height: 1px;
  background: #eeeeee;
}
</style>
