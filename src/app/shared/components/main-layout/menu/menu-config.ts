export interface MenuNode {
    name: string;
    children?: MenuNode[];
    path?: string;
  }
  
  export const TREE_DATA: MenuNode[] = [
      {
        name: 'Overview',
        path: '/Overview'
      },
    {
      name: 'Customer journey',
      children: [
        {name: 'Flow Chart', path:'/Flow Chart'},
        {name: 'Table', path:'/CustomerTable'},
      ]
    },
  ];
  
  /** Flat node with expandable and level information */
  export interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
  }