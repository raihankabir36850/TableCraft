export const sideMenuData = [
  { name: 'basic', id: 1, url: '/overview' },
  { name: 'class Component', id: 2, url: '/overview/class-component' },
  {
    name: 'columns',
    children: [
      {
        name: 'column reordering',
        id: 1,
        url: '/overview/column-reordering',
      },
      {
        name: 'column resizing',
        id: 2,
        url: '/overview/column-resizing',
      },
      {
        name: 'column settings',
        id: 3,
        url: '/overview/column-settings',
      },
    ],
    id: 3,
  },
  {
    name: 'customization',
    children: [
      {
        name: 'alert cell',
        id: 1,
        url: '/overview/alert-cell',
      },
      {
        name: 'custom attributes',
        id: 2,
        url: '/overview/custom-attributes',
      },
    ],
    id: 4,
  },
];
