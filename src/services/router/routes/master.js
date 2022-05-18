import Master from '@/modules/master';
import CreateOrUpdate from '@/modules/master/CreateOrUpdate';
import FieldList from '@/modules/master/FieldList';
import CreateFields from '@/modules/master/CreateFields';
import DetailField from '@/modules/master/DetailField';
import UpdateField from '@/modules/master/UpdateField';

export default [
  {
    path: 'master',
    name: 'dynamic_master',
    component: Master,
    meta: {
      title: 'Master',
      menu_key: 'dynamic_master',
    }
  },
  {
    path: 'master/create',
    name: 'dynamic_master-create',
    component: CreateOrUpdate,
    meta: {
      title: 'Master - Create',
      menu_key: 'dynamic_master',
    }
  },
  {
    path: 'master/:master_id',
    name: 'dynamic_master-update',
    meta: {
      title: 'Master - Update',
      menu_key: 'dynamic_master',
    },
    component: CreateOrUpdate
  },
  {
    path: 'master/:master_menu_name/:master_id/fields',
    name: 'dynamic_master-show',
    meta: {
      title: 'Master | Master Table',
      menu_key: 'dynamic_master',
    },
    component: FieldList
  },
  {
    path: 'master/:master_menu_name/:master_id/create/fields',
    name: 'dynamic_master_fields_create',
    meta: {
      title: 'Master | Master Table - Create',
      menu_key: 'dynamic_master',
    },
    component: CreateFields
  },
  {
    path: 'master/field/:id',
    name: 'dynamic_master_field_detail',
    meta: {
      title: 'Master | Master Field - Detail',
      menu_key: 'dynamic_master',
    },
    component: DetailField
  },
  {
    path: 'master/update/field/:id',
    name: 'dynamic_master_field_update',
    meta: {
      title: 'Master | Master Field - Update',
      menu_key: 'dynamic_master',
    },
    component: UpdateField
  },
]
