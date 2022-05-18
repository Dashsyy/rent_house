const menus = [
  {
    name: 'dashboard',
    disable: true,
    icon: 'dashboard',
    url_name: 'dashboard',
    menu_key: 'dashboard',
    site_admin: true
  },
  {
    name: 'user',
    active: false,
    disable: true,
    icon: 'user',
    url_name: 'user',
    menu_key: 'user',
    site_admin: false
  },
  {
    name: 'site',
    active: false,
    disable: true,
    icon: 'global',
    url_name: 'site',
    menu_key: 'site',
  },
  {
    name: 'setting',
    menu_key: 'setting',
    active: false,
    disable: true,
    icon: 'setting',
    site_admin: false,
    is_site_id: true,
    is_sub: true,
    items: [
      {
        name: 'dynamic_master',
        active: false,
        disable: true,
        url_name: 'dynamic_master',
        menu_key: 'dynamic_master',
        site_admin: true,
      },
      {
        name: 'simple_filter',
        active: false,
        disable: true,
        icon: 'search',
        url_name: 'simple_filter',
        menu_key: 'simple_filter',
        site_admin: true,
      },
      {
        name: 'advance_filter',
        active: false,
        disable: true,
        url_name: 'advance_filter',
        menu_key: 'advance_filter',
        site_admin: true,
      },
      {
        name: 'template',
        active: false,
        disable: true,
        icon: 'form',
        url_name: 'template',
        menu_key: 'template', // set the to menu component be able to active the menu
        site_admin: true,
      },
      {
        name: 'html_setting',
        active: false,
        disable: true,
        url_name: 'html_setting',
        menu_key: 'html_setting', // set the to menu component be able to active the menu
        site_admin: true,
      }
    ]
  }
];

export {menus} ;
