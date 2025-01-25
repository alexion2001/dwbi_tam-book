
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

};
export const oltpFieldsConfig: Table[] = [
  {tableName: 'USER',
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
        label: "Password",
        type: "string",
        isRequired: true,
        id: "password",
      },
      {
        label: "Name",
        type: "string",
        isRequired: true,
        id: "name",
      },
      {
        label: "Account Creation Date",
        type: "date",
        isRequired: true,
        id: "account_creation_date",
      },
      {
        label: "Is Deleted",
        type: "boolean",
        isRequired: false,
        id: "is_deleted",
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
      {
        label: "Id Address",
        type: "number",
        isRequired: true,
        id: "id_address",
      },
    ],    
    id: 'user'
  },
  {tableName: 'ORDER',
        id: 'order',
    attributes: [
      {
        label: "Id Order",
        type: "number",
        isRequired: false,
        id: "id_order",
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
        label: "Date",
        type: "date",
        isRequired: true,
        id: "date",
      },
      {
        label: "Total Price",
        type: "number",
        isRequired: true,
        id: "total_price",
      },
      {
        label: "Status",
        type: "string",
        isRequired: true,
        id: "status",
      },
    ],
    },
    {tableName: 'BOOK',
          id: 'book',
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
          label: "Id Serie",
          type: "number",
          isRequired: true,
          id: "id_serie",
        },
        {
          label: "Id Author",
          type: "number",
          isRequired: true,
          id: "id_author",
        },
        {
          label: "Id Publisher",
          type: "number",
          isRequired: true,
          id: "id_publisher",
        },
        {
          label: "Id Category",
          type: "number",
          isRequired: true,
          id: "id_category",
        },
      ],
      },
      {tableName: 'AUTHOR',
            id: 'author',
            getURL:'http://localhost:8181/ords/dwbi_miruna/authors/all_authors',
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
            id: "firstname",
          },
          {
            label: "Last Name",
            type: "string",
            isRequired: true,
            id: "lastname",
          },
        ],
        },
        {tableName: 'PUBLISHER',
              id: 'publisher',
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
            id: 'category',
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
            {tableName: 'SERIE',
              id: 'serie',
              attributes: [
                {
                  label: "Id Serie",
                  type: "number",
                  isRequired: false,
                  id: "id_serie",
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
                id: 'address',
                attributes: [
                  {
                    label: "Id Address",
                    type: "number",
                    isRequired: false,
                    id: "id_address",
                  },
                  {
                    label: "Street",
                    type: "string",
                    isRequired: true,
                    id: "street",
                  },
                  {
                    label: "Block",
                    type: "string",
                    isRequired: false,
                    id: "block",
                  },

                ],
              },
             
];
