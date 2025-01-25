
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
    id: 'user',
    getURL:'http://localhost:8181/ords/dwbi_miruna/users/all_users',
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
          getURL:'http://localhost:8181/ords/dwbi_miruna/books/all_books',
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
          label: "Serie",
          type: "string",
          isRequired: false,
          id: "serie",
        },
        {
          label: "Publisher",
          type: "string",
          isRequired: false,
          id: "publisher",
        },
        {
          label: "Category",
          type: "string",
          isRequired: false,
          id: "category",
        },
        {
          label: "Firstname Author",
          type: "string",
          isRequired: false,
          id: "firstname",
        },
        {
          label: "Lastname Author",
          type: "string",
          isRequired: false,
          id: "lastname",
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
              getURL: 'http://localhost:8181/ords/dwbi_miruna/publishers/all_publishers',
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
                  {
                    label: "Id City",
                    type: "number",
                    isRequired: false,
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
                    isRequired: false,
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
                id: "id_user",
              },
              {
                label: "Rating",
                type: "string",
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
