
export type Field = {
  label: string;
  type: string;
  isRequired: boolean;
  id: string;
  fields?: Field[];
  options?:any
};


export type Table = {
  tableName: string;
  attributes: Field[];
  id: string;
  getURL?: string;
  postURL?:string;
  updateURL?:string;
  isViewOnly?:boolean; //daca e true nu poti sa introduci date manual = NU ARE FORM

};
export const olapFieldsConfig: Table[] = [
  {tableName: 'USER',
    id: 'user-dw',
    isViewOnly:true,
    attributes: [
      {
        label: "Id User",
        type: "number",
        isRequired: false,
        id: "id_user",
      },
      {
        label: "Email",
        type: "string",
        isRequired: true,
        id: "email",
      },

      {
        label: "Name",
        type: "string",
        isRequired: true,
        id: "name",
      },

      {
        label: "Gender",
        type: "select",
        isRequired: true,
        id: "gender",
        options: ['M','F']
      },
      {
        label: "Type",
        type: "select",
        isRequired: true,
        id: "type",
        options:[
          'Persoana fizica',
          'Persoana juridica'
        ]
      },
    ]
  },
  {tableName: 'ORDER WITH DETAILS',
    id:'owd',
    isViewOnly:true,
    attributes: [
      {
        label: "Id Book",
        type: "number",
        isRequired: true,
        id: "id_book",
      },
      {
        label: "Id User",
        type: "number",
        isRequired: true,
        id: "id_user",
      },
      {
        label: "Id Address",
        type: "number",
        isRequired: true,
        id: "id_address",
      },
      {
        label: "Id Time",
        type: "number",
        isRequired: true,
        id: "id_time",
      },
      {
        label: "Id Publisher",
        type: "number",
        isRequired: true,
        id: "id_pulisher",
      },
    
    {
      label: "Id Category",
      type: "number",
      isRequired: true,
      id: "id_category",
    },
    {
      label: "Id Author",
      type: "number",
      isRequired: true,
      id: "id_author",
    },
      {
        label: "Cantity",
        type: "cantity",
        isRequired: true,
        id: "cantity",
      },
      {
        label: "Price",
        type: "number",
        isRequired: true,
        id: "price",
      }
    ],
    },
    {tableName: 'BOOK',
      id:'dw-book',
      isViewOnly:true,
      attributes: [
        {
          label: "Id Book",
          type: "number",
          isRequired: false,
          id: "id_book",
        },
        {
          label: "Name",
          type: "string",
          isRequired: true,
          id: "name",
        },
        {
          label: "Price",
          type: "number",
          isRequired: true,
          id: "price",
        },
        {
          label: "Stock Status",
          type: "string",
          isRequired: true,
          id: "stock_status",
        },
        {
          label: "Year",
          type: "number",
          isRequired: true,
          id: "year",
        },
        {
          label: "Description",
          type: "string",
          isRequired: false,
          id: "description",
        },
        {
          label: "Nume Serie",
          type: "number",
          isRequired: true,
          id: "id_serie",
        },
        {
          label: "Nume Author",
          type: "number",
          isRequired: true,
          id: "id_author",
        },
        {
          label: "Nume Publisher",
          type: "number",
          isRequired: true,
          id: "id_publisher",
        },
        {
          label: "Nume Category",
          type: "number",
          isRequired: true,
          id: "id_category",
        },
      ],
      },
      {tableName: 'AUTHOR',
        id:'dw-author',
        isViewOnly:true,
        attributes: [
          {
            label: "Id Author",
            type: "number",
            isRequired: false,
            id: "id_author",
          },
          {
            label: "First Name",
            type: "string",
            isRequired: true,
            id: "first_name",
          },
          {
            label: "Last Name",
            type: "string",
            isRequired: true,
            id: "last_name",
          },
        ],
        },
        {tableName: 'PUBLISHER',
          id:'dw-publisher',
          isViewOnly:true,
          attributes: [
            {
              label: "Id Publisher",
              type: "number",
              isRequired: false,
              id: "id_publisher",
            },
            {
              label: "Name",
              type: "string",
              isRequired: true,
              id: "name",
            },
            {
              label: "Email",
              type: "string",
              isRequired: true,
              id: "email",
            },
          ],
          },
          {tableName: 'CATEGORY',
            id:'dw-category',
            isViewOnly:true,
            attributes: [
              {
                label: "Id Category",
                type: "number",
                isRequired: false,
                id: "id_category",
              },
              {
                label: "Name",
                type: "string",
                isRequired: true,
                id: "name",
              },
            ],
            },

              {tableName: 'ADDRESS',
                id:'dw-address',
                attributes: [
                  {
                    label: "Id Address",
                    type: "number",
                    isRequired: false,
                    id: "id_address",
                  },
                  {
                    label: "Country",
                    type: "string",
                    isRequired: true,
                    id: "country",
                  },
                  {
                    label: "City",
                    type: "string",
                    isRequired: false,
                    id: "city",
                  },
                  {
                    label: "Street",
                    type: "string",
                    isRequired: false,
                    id: "street",
                  },
                ],
              }
];
