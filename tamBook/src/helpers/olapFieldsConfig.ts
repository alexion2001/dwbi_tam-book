
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
    getURL:'http://localhost:8181/ords/dwbi_olap/user/all_users',
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
    getURL:'http://localhost:8181/ords/dwbi_olap/order_details/all_order_details',
    isViewOnly:true,
    attributes: [
      {
        label: "Id User",
        type: "number",
        isRequired: true,
        id: "id_user",
      },
      {
        label: "Id Book",
        type: "number",
        isRequired: true,
        id: "id_book",
      },
      {
        label: "Id Publisher",
        type: "number",
        isRequired: true,
        id: "id_publisher",
      },
      {
        label: "Id Address",
        type: "number",
        isRequired: true,
        id: "id_address",
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
        label: "Id Time",
        type: "DATE",
        isRequired: true,
        id: "id_timp",
      },
      {
        label: "Cantity",
        type: "number",
        isRequired: true,
        id: "quantity",
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
      getURL:'http://localhost:8181/ords/dwbi_olap/book/all_books',
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
          label: "Stock Status",
          type: "number",
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
          label: "Publisher",
          type: "string",
          isRequired: true,
          id: "publisher_name",
        },
        {
          label: "Serie",
          type: "string",
          isRequired: true,
          id: "serie_name",
        },
        {
          label: "Author",
          type: "string",
          isRequired: true,
          id: "author_name",
        },
        {
          label: "Category",
          type: "string",
          isRequired: true,
          id: "category_name",
        },
      ],
      },
      {tableName: 'AUTHOR',
        id:'dw-author',
        getURL:'http://localhost:8181/ords/dwbi_olap/author/all_authors',
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
          id:'dw-publisher',
          getURL:'http://localhost:8181/ords/dwbi_olap/publisher/all_publishers',
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
            getURL:'http://localhost:8181/ords/dwbi_olap/category/all_categories',
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
                getURL:'http://localhost:8181/ords/dwbi_olap/address/all_addresses',
                isViewOnly:true,
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
