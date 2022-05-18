const listUsers = [
  {
    id: 1,
    name: "sophorn",
    email: "sophorn@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 10,
        name: "Site 10",
        domain: "site10.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
      {
        id: 11,
        name: "Site 11",
        domain: "site11.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
    ],
    status: "publish",
  },
  {
    id: 10,
    name: "kangchana",
    email: "kanghana@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 10,
        name: "Site 10",
        domain: "site10.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
    ],
    status: "publish",
  },
  {
    id: 2,
    name: "Rachana",
    email: "rachana@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 13,
        name: 'Site 13',
        domain: 'site13.tle.co',
        template: [
          {
            id: 51,
            name: 'Food',
            path: '',
            url_image: 'https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg',
            status: 'publish',
            created_at: ''
          }
        ],
        status: 'publish'
      },
    ],
    status: "publish",
  },
  {
    id: 3,
    name: "Dana",
    email: "dana@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 11,
        name: "Site 11",
        domain: "site11.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
    ],
    status: "unpublish",
  },
  {
    id: 4,
    name: "Kunthea",
    email: "kunthea@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 6,
        name: 'Site 6',
        domain: 'site6.tle.co',
        template: [
          {
            id: 57,
            name: 'template 7',
            path: 'System service',
            url_image: 'https://xdfile.com/wp-content/uploads/2019/10/free-house-cleaning-landing-page.jpg',
            status: 'unpublish',
            created_at: ''
          },
        ],
        status: 'unpublish'
      },
    ],
    status: "publish",
  },
  {
    id: 5,
    name: "Bunhong",
    email: "bunhong@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 10,
        name: "Site 10",
        domain: "site10.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
      {
        id: 11,
        name: "Site 11",
        domain: "site11.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
    ],
    status: "publish",
  },
  {
    id: 6,
    name: "Sokchan",
    email: "keatsokchan@gmail.com",
    password: '1234567',
    role: {
      id: 2,
      name: 'Admin Site'
    },
    sites: [
      {
        id: 11,
        name: "Site 11",
        domain: "site11.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
    ],
    status: "unpublish",
  },
  {
    id: 7,
    name: "Thida",
    email: "chanthida@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 9,
        name: 'Site 9',
        domain: 'site9.tle.co',
        template: [
          {
            id: 51,
            name: 'Food',
            path: '',
            url_image: 'https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg',
            status: 'publish',
            created_at: ''
          }
        ],
        status: 'publish'
      },
    ],
    status: "publish",
  },
  {
    id: 8,
    name: "Pisey",
    email: "pisey@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 10,
        name: "Site 10",
        domain: "site10.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
      {
        id: 11,
        name: "Site 11",
        domain: "site11.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
    ],
    status: "publish",
  },
  {
    id: 9,
    name: "Rineth",
    email: "rineth@gmail.com",
    password: '1234567',
    role: {
      id: 2,
      name: 'Admin Site'
    },
    sites: [
      {
        id: 9,
        name: 'Site 9',
        domain: 'site9.tle.co',
        template: [
          {
            id: 51,
            name: 'Food',
            path: '',
            url_image: 'https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg',
            status: 'publish',
            created_at: ''
          }
        ],
        status: 'publish'
      },
    ],
    status: "publish",
  },
  {
    id: 11,
    name: "Sopheaktra",
    email: "sopheaktra@gmail.com",
    password: '1234567',
    role: {
      id: 1,
      name: 'Admin'
    },
    sites: [
      {
        id: 10,
        name: "Site 10",
        domain: "site10.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
      {
        id: 11,
        name: "Site 11",
        domain: "site11.tle.co",
        templates: [
          {
            id: 51,
            name: "Food",
            path: "",
            url_image:
              "https://assets.materialup.com/uploads/57283d21-3f41-42d3-bcec-6a03a533ebcb/preview.jpg",
            status: "publish",
            created_at: "",
          },
        ],
        status: "publish",
      },
    ],
    status: "publish",
  },
];
export {listUsers};
