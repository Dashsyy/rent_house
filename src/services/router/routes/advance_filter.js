import Index from '@/modules/advance_filter';
import CreateOrUpdate from '@/modules/advance_filter/CreateOrUpdate';

export default [
    {
        path: 'advance-filter',
        name: 'advance_filter',
        meta: {
            title: 'Advance Filter',
            menu_key: 'advance_filter',
        },
        component: Index,
    },
    {
        path: 'advance-filter/create',
        name: 'advance_filter-create',
        meta: {
            title: 'Advance Filter - Create',
            menu_key: 'advance_filter',
        },
        component: CreateOrUpdate
    },
    {
        path: 'advance-filter/:filter_id/update',
        name: 'advance_filter-update',
        meta: {
            title: 'Advance Filter - Update',
            menu_key: 'advance_filter',
        },
        component: CreateOrUpdate
    }
]