import Input from './input';
const Components = {
  Input,
};

const ComponentsInit = {
  install(Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name]);
    });
  }
};

export default ComponentsInit;
