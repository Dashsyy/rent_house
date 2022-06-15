import Button from './button';
import DateTime from './datetime';
import Input from './input';
import Radio from './radio';
import Select from './select';
import TableView from './table'
import TextArea from './textarea'
import Pagination from './pagination/pagination.vue'
import Datepicker from '@vuepic/vue-datepicker';
import CheckBox from './checkbox'
import '@vuepic/vue-datepicker/dist/main.css'
const Components = {
  Button,
  DateTime,
  Input,
  Radio,
  Select,
  TableView,
  TextArea,
  Pagination,
  Datepicker,
  CheckBox
};

const ComponentsInit = {
  install(Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name]);
    });
  }
};

export default ComponentsInit;
