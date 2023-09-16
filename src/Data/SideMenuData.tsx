export const sideMenuData = [
  { name: "basic", id: 1, url: "overview" },
  { name: "class Component", id: 2, url: "/class-component" },
  {
    name: "columns",
    children: [
      {
        name: "column reordering",
        id: 1,
        url: "/column-reordering",
      },
      {
        name: "column resizing",
        id: 2,
        url: "/column-resizing",
      },
      {
        name: "column settings",
        id: 3,
        url: "/column-settings",
      },
    ],
    id: 3,
    url: "overview",
  },
  {
    name: "customization",
    children: [
      {
        name: "alert cell",
        id: 1,
        url: "/alert-cell",
      },
      {
        name: "custom attributes",
        id: 2,
        url: "/custom-attributes",
      },
    ],
    id: 3,
    url: "overview",
  },
];
