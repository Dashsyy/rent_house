import Button from './button';
import DateTime from './datetime';
import Input from './input';
import Radio from './radio';
import Select from './select';
import TableView from './table'
import TextArea from './textarea'
const Components = {
  Button,
  DateTime,
  Input,
  Radio,
  Select,
  TableView,
  TextArea
};

const ComponentsInit = {
  install(Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name]);
    });
  }
};

export default ComponentsInit;
