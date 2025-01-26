
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
  isViewOnly?:boolean;
  attributes: Field[];
  id: string;
  getURL?: string;
  postURL?:string;
  updateURL?:string;
  gets?:{
    type:string;
    label:string;
    url:string;
    param?:string;
  }[];
  update?: Field[];

};
export const oltpFieldsConfig: Table[] = [
  {tableName: 'USER',
    id: 'user',
    getURL:'http://localhost:8181/ords/dwbi_miruna/users/all_users',
    postURL:'http://localhost:8181/ords/dwbi_miruna/users/insert',
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
        isRequired: false,
        id: "accountcreationdate",
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
    ],   
  },
  {tableName: 'ORDER',
        id: 'order',
        updateURL: 'http://localhost:8181/ords/dwbi_miruna/orders/status_upd',
        postURL:'http://localhost:8181/ords/dwbi_miruna/orders/insert',
        gets:[
        {
          type:'table',
          url:'http://localhost:8181/ords/dwbi_miruna/orders/all_orders',
          label:'get all'
        },
        {
          type:'text',
          param:'username',
          url:'http://localhost:8181/ords/dwbi_miruna/orders/all_order_data',
           label:'get all by user'
        },],

    update:[
      {
        label: "Id Order",
        type: "number",
        isRequired: true,
        id: "idOrder",
      },
      {
        label: "Status",
        type: "select",
        isRequired: true,
        id: "status",
        options:['Shipped','Completed' ,'Cancelled']
      },
    ],    
    attributes: [
      {
        label: "Id Order",
        type: "number",
        isRequired: false,
        id: "id_order",
      },
      {
        label: "Name",
        type: "string",
        isRequired: false,
        id: "name",
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
        isRequired: false,
        id: "order_date",
      },
      {
        label: "Total Price",
        type: "number",
        isRequired: false,
        id: "total_price",
      },
      {
        label: "Status",
        type: "string",
        isRequired: false,
        id: "status",
      },
      {
        label: "Street",
        type: "string",
        isRequired: false,
        id: "street",
      },
      {
        label: "Block",
        type: "string",
        isRequired: false,
        id: "block",
      },
      {
        label: "City",
        type: "string",
        isRequired: false,
        id: "city",
      },
      {
        label: "Country",
        type: "string",
        isRequired: false,
        id: "country",
      },
    ],
    },
  {tableName: 'ORDER DETAILS',
        id: 'order_details',
        postURL:'http://localhost:8181/ords/dwbi_miruna/order_details/insert',
        gets:[
        {
          type:'text',
          param:'idorder',
          url:'http://localhost:8181/ords/dwbi_miruna/order_details/order_details',
           label:'get all order details by order'
        },],
    attributes: [
      {
        label: "Id Book",
        type: "number",
        isRequired: true,
        id: "id_book",
      },
      {
        label: "Id Order",
        type: "number",
        isRequired: true,
        id: "id_order",
      },
      {
        label: "Quantity",
        type: "number",
        isRequired: true,
        id: "quantity",
      },
      {
        label: "Price",
        type: "text",
        isRequired: true,
        id: "price",
      },
      {
        label: "Discount",
        type: "number",
        isRequired: true,
        id: "discount",
      },
    ],
    },
    {tableName: 'BOOK',
          id: 'book',
          getURL:'http://localhost:8181/ords/dwbi_miruna/books/all_books',
          updateURL:'http://localhost:8181/ords/dwbi_miruna/books/price_upd',
          postURL:'http://localhost:8181/ords/dwbi_miruna/books/insert',
          update:[
            {
              label: "Id Book",
              type: "number",
              isRequired: true,
              id: "idBook",
            },
            {
              label: "Price",
              type: "text",
              isRequired: true,
              id: "price",
            },
          ],    
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
          id: "book",
        },
        {
          label: "Price",
          type: "text",
          isRequired: true,
          id: "price",
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
          isRequired: true,
          id: "description",
        },
        {
          label: "Serie",
          type: "string",
          isRequired: true,
          id: "serie",
        },
        {
          label: "Publisher",
          type: "string",
          isRequired: true,
          id: "publisher",
        },
        {
          label: "Category",
          type: "string",
          isRequired: true,
          id: "category",
        },
        {
          label: "Firstname Author",
          type: "string",
          isRequired: true,
          id: "firstname",
        },
        {
          label: "Lastname Author",
          type: "string",
          isRequired: true,
          id: "lastname",
        },
        {
          label: "Id Serie",
          type: "number",
          isRequired: false,
          id: "id_serie",
        },
        {
          label: "Id Author",
          type: "number",
          isRequired: false,
          id: "id_author",
        },
        {
          label: "Id Publisher",
          type: "number",
          isRequired: false,
          id: "id_publisher",
        },
        {
          label: "Id Category",
          type: "number",
          isRequired: false,
          id: "id_category",
        },
        {
          label: "Email Publisher",
          type: "string",
          isRequired: true,
          id: "email_publisher",
        },

      ],
      },
      {tableName: 'AUTHOR',
            id: 'author',
            getURL:'http://localhost:8181/ords/dwbi_miruna/authors/all_authors',
            isViewOnly: true,
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
              getURL: 'http://localhost:8181/ords/dwbi_miruna/publishers/all_publishers',
              isViewOnly: true,
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
            getURL:'http://localhost:8181/ords/dwbi_miruna/categories/all_categories',
            isViewOnly: true,
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
              getURL: 'http://localhost:8181/ords/dwbi_miruna/series/all_series',
              isViewOnly: true,
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
                getURL:'http://localhost:8181/ords/dwbi_miruna/addresses/all_addresses',
                postURL:'http://localhost:8181/ords/dwbi_miruna/addresses/insert',
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
                    isRequired: true,
                    id: "block",
                  },
                  {
                    label: "Id City",
                    type: "number",
                    isRequired: true,
                    id: "id_city",
                  },
                  {
                    label: "City",
                    type: "string",
                    isRequired: false,
                    id: "city",
                  },
                  {
                    label: "Country",
                    type: "string",
                    isRequired: false,
                    id: "country",
                  },
                  {
                    label: "Id User",
                    type: "number",
                    isRequired: true,
                    id: "id_user",
                  },
                  {
                    label: "Username",
                    type: "string",
                    isRequired: false,
                    id: "username",
                  },
                ],
              },
              {tableName: 'COUNTRY',
                id: 'country',
                getURL:'http://localhost:8181/ords/dwbi_miruna/countries/all_countries',
                postURL:'http://localhost:8181/ords/dwbi_miruna/countries/insert',
                attributes: [
                  {
                    label: "Id Country",
                    type: "number",
                    isRequired: false,
                    id: "id_country",
                  },
                  {
                    label: "Name",
                    type: "string",
                    isRequired: true,
                    id: "name",
                  },
                ],
              },
              {tableName: 'REVIEW',
                id: 'review',
                getURL:'http://localhost:8181/ords/dwbi_miruna/reviews/all_reviews',
                postURL:'http://localhost:8181/ords/dwbi_miruna/reviews/insert',
            attributes: [
              {
                label: "Review Date",
                type: "date",
                isRequired: false,
                id: "review_date",
              },
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
                label: "Rating (1-5)",
                type: "number",
                isRequired: true,
                id: "rating",
              },
              {
                label: "Comment",
                type: "string",
                isRequired: true,
                id: "review_comment",
              },
            ],
            },
              {tableName: 'CITY',
                id: 'city',
                getURL:'http://localhost:8181/ords/dwbi_miruna/cities/all_cities',
                postURL:'http://localhost:8181/ords/dwbi_miruna/cities/insert',
                attributes: [
                  {
                    label: "Id City",
                    type: "number",
                    isRequired: false,
                    id: "id_city",
                  },
                  {
                    label: "Name",
                    type: "string",
                    isRequired: true,
                    id: "name",
                  },
                  {
                    label: "Id Country",
                    type: "number",
                    isRequired: true,
                    id: "id_country"
                  },
                  {
                    label: "Country",
                    type: "string",
                    isRequired: false,
                    id: "country",
                  },
                ],
              },
             
];
