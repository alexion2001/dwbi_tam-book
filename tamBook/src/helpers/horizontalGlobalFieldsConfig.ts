export type Field = {
  label: string;
  type: string;
  isRequired: boolean;
  isFormDisplay: boolean;
  id: string;
  fields?: Field[];
  options?: any;
};

export type Table = {
  tableName: string;
  isViewOnly?: boolean;
  attributes: Field[];
  id: string;
  getURL?: string;
  postURL?: string;
  updateURL?: string;
  deleteURL?: string;
  gets?: {
    type: string;
    label: string;
    url: string;
    param?: string;
  }[];
  update?: Field[];
  delete?: Field[];
};
export const horizontalGlobalFieldsConfig: Table[] = [
  {
    tableName: "USER",
    id: "user",
    getURL: "http://localhost:8181/ords/bdd_global/users/all_users",
    postURL: "http://localhost:8181/ords/bdd_global/users/insert",
    updateURL: "http://localhost:8181/ords/bdd_global/users/upd_del_name",
    deleteURL: "http://localhost:8181/ords/bdd_global/users/delete",
    delete: [
      {
        label: "Id user",
        type: "number",
        isRequired: true,
        id: "id_user",
        isFormDisplay: true,
      },
    ],
    update: [
      {
        label: "Id user",
        type: "number",
        isRequired: true,
        id: "id_user",
        isFormDisplay: true,
      },
      {
        label: "Is deleted",
        type: "text",
        isRequired: false,
        id: "is_deleted",
        isFormDisplay: true,
      },
      {
        label: "Name",
        type: "text",
        isRequired: false,
        id: "name",
        isFormDisplay: true,
      },
    ],
    attributes: [
      {
        label: "Id User",
        type: "number",
        isRequired: false,
        id: "id_user",
        isFormDisplay: false,
      },
      {
        label: "Name",
        type: "string",
        isRequired: true,
        id: "name",
        isFormDisplay: true,
      },
      {
        label: "Email",
        type: "string",
        isRequired: true,
        id: "email",
        isFormDisplay: true,
      },
      {
        label: "Password",
        type: "string",
        isRequired: true,
        id: "password",
        isFormDisplay: true,
      },
      {
        label: "Account Creation Date",
        type: "date",
        isRequired: false,
        id: "accountcreationdate",
        isFormDisplay: false,
      },
      {
        label: "Is Deleted",
        type: "boolean",
        isRequired: false,
        id: "is_deleted",
        isFormDisplay: false,
      },
      {
        label: "Gender",
        type: "select",
        isRequired: true,
        id: "gender",
        options: ["M", "F"],
        isFormDisplay: true,
      },
      {
        label: "Type",
        type: "select",
        isRequired: true,
        id: "type",
        options: ["Persoana fizica", "Persoana juridica"],
        isFormDisplay: true,
      },
    ],
  },
  {
    tableName: "USER GLOBAL",
    id: "user_tam_global",
    getURL: "http://localhost:8181/ords/bdd_global/users_global/al_users_global",
    attributes: [
      {
        label: "Id User",
        type: "number",
        isRequired: false,
        id: "id_user",
        isFormDisplay: false,
      },

      {
        label: "Account Creation Date",
        type: "date",
        isRequired: false,
        id: "accountcreationdate",
        isFormDisplay: true,
      },
      {
        label: "Is Deleted",
        type: "boolean",
        isRequired: false,
        id: "is_deleted",
        isFormDisplay: true,
      },
      {
        label: "Gender",
        type: "select",
        isRequired: true,
        id: "gender",
        options: ["M", "F"],
        isFormDisplay: true,
      },
      {
        label: "Type",
        type: "select",
        isRequired: true,
        id: "type",
        options: ["Persoana fizica", "Persoana juridica"],
        isFormDisplay: true,
      },
    ],
  },
  {
    tableName: "ORDER",
    id: "order",
    getURL: "http://localhost:8181/ords/bdd_global/orders/all_orders",
    updateURL: "http://localhost:8181/ords/bdd_global/orders/upd_status",
    postURL: "http://localhost:8181/ords/bdd_global/orders/insert",
    update: [
      {
        label: "Id Order",
        type: "number",
        isRequired: true,
        id: "id_order",
        isFormDisplay: true,
      },
      {
        label: "Status",
        type: "select",
        isRequired: true,
        id: "status",
        options: ["Shipped", "Completed", "Cancelled"],
        isFormDisplay: true,
      },
    ],
    deleteURL: "http://localhost:8181/ords/bdd_global/orders/delete",
    delete: [
      {
        label: "Id order",
        type: "text",
        isRequired: true,
        id: "id_order",
        isFormDisplay: true,
      },
    ],
    attributes: [
      {
        label: "Id Order",
        type: "number",
        isRequired: false,
        id: "id_order",
        isFormDisplay: false,
      },
      {
        label: "Name",
        type: "string",
        isRequired: false,
        id: "name",
        isFormDisplay: false,
      },
      {
        label: "Id User",
        type: "number",
        isRequired: true,
        id: "id_user",
        isFormDisplay: true,
      },
      {
        label: "Id Address",
        type: "number",
        isRequired: true,
        id: "id_address",
        isFormDisplay: true,
      },
      {
        label: "Date",
        type: "date",
        isRequired: false,
        id: "order_date",
        isFormDisplay: false,
      },
      {
        label: "Total Price",
        type: "number",
        isRequired: false,
        id: "total_price",
        isFormDisplay: false,
      },

      {
        label: "Status",
        type: "string",
        isRequired: false,
        id: "status",
        isFormDisplay: false,
      },
      {
        label: "Street",
        type: "string",
        isRequired: false,
        id: "street",
        isFormDisplay: false,
      },
      {
        label: "Block",
        type: "string",
        isRequired: false,
        id: "block",
        isFormDisplay: false,
      },
      {
        label: "City",
        type: "string",
        isRequired: false,
        id: "city",
        isFormDisplay: false,
      },
      {
        label: "Country",
        type: "string",
        isRequired: false,
        id: "country",
        isFormDisplay: false,
      },
    ],
  },
  {
    tableName: "ORDER DETAILS",
    id: "order_details",
    //getURL: "url de get",
    postURL: "http://localhost:8181/ords/bdd_global/orderdetails/insert",
    updateURL: "http://localhost:8181/ords/bdd_global/orderdetails/quantity_upd",
    deleteURL: "http://localhost:8181/ords/bdd_global/orderdetails/delete",
    gets:[
      {
        type:'text',
        param:'idorder',
        url:'http://localhost:8181/ords/bdd_global/orderdetails/all_orderdetails',
         label:'get all order details by order'
      },],
    delete: [
      {
        label: "Id order",
        type: "text",
        isRequired: true,
        id: "id_order",
        isFormDisplay: true,
      },
      {
        label: "Id book",
        type: "text",
        isRequired: true,
        id: "id_book",
        isFormDisplay: true,
      },
    ],
    update: [
      {
        label: "Id Order",
        type: "number",
        isRequired: true,
        id: "id_order",
        isFormDisplay: true,
      },
      {
        label: "Id Book",
        type: "number",
        isRequired: true,
        id: "id_book",
        isFormDisplay: true,
      },
      {
        label: "Quantity",
        type: "number",
        isRequired: true,
        id: "quantity",
        isFormDisplay: true,
      },
    ],

    attributes: [
      {
        label: "Id Book",
        type: "number",
        isRequired: true,
        id: "id_book",
        isFormDisplay: true,
      },
      {
        label: "Id Order",
        type: "number",
        isRequired: true,
        id: "id_order",
        isFormDisplay: true,
      },
      {
        label: "Quantity",
        type: "number",
        isRequired: true,
        id: "quantity",
        isFormDisplay: true,
      },
      {
        label: "Price",
        type: "text",
        isRequired: true,
        id: "price",
        isFormDisplay: true,
      },
      {
        label: "Discount",
        type: "number",
        isRequired: true,
        id: "discount",
        isFormDisplay: true,
      },
    ],
  },
  {
    tableName: "BOOK",
    id: "book",
    getURL: "http://localhost:8181/ords/bdd_global/books/all_books",
    updateURL: "http://localhost:8181/ords/bdd_global/books/price_upd",
    postURL: "http://localhost:8181/ords/bdd_global/books/insert",
    deleteURL: "http://localhost:8181/ords/bdd_global/books/delete",
    delete: [
      {
        label: "Id book",
        type: "number",
        isRequired: true,
        id: "id_book",
        isFormDisplay: true,
      },
    ],
    update: [
      {
        label: "Id Book",
        type: "number",
        isRequired: true,
        id: "idBook",
        isFormDisplay: true,
      },
      {
        label: "Price",
        type: "text",
        isRequired: true,
        id: "price",
        isFormDisplay: true,
      },
    ],
    attributes: [
      {
        label: "Id Book",
        type: "number",
        isRequired: false,
        id: "id_book",
        isFormDisplay: false,
      },
      {
        label: "Name",
        type: "string",
        isRequired: true,
        id: "name",
        isFormDisplay: true,
      },
      {
        label: "Price",
        type: "text",
        isRequired: true,
        id: "price",
        isFormDisplay: true,
      },
      {
        label: "Stock Status",
        type: "number",
        isRequired: true,
        id: "stock_status",
        isFormDisplay: true,
      },
      {
        label: "Year",
        type: "number",
        isRequired: true,
        id: "year",
        isFormDisplay: true,
      },
      {
        label: "Description",
        type: "string",
        isRequired: true,
        id: "description",
        isFormDisplay: true,
      },
      {
        label: "Id Serie",
        type: "number",
        isRequired: false,
        id: "id_serie",
        isFormDisplay: true,
      },
      {
        label: "Id Author",
        type: "number",
        isRequired: false,
        id: "id_author",
        isFormDisplay: true,
      },
      {
        label: "Id Publisher",
        type: "number",
        isRequired: false,
        id: "id_publisher",
        isFormDisplay: true,
      },
      {
        label: "Id Category",
        type: "number",
        isRequired: false,
        id: "id_category",
        isFormDisplay: true,
      },
    ],
  },
  {
    tableName: "ADDRESS",
    id: "address",
    getURL: "http://localhost:8181/ords/bdd_global/addresses/all_address",
    postURL: "http://localhost:8181/ords/bdd_global/addresses/insert",
    updateURL: "http://localhost:8181/ords/bdd_global/addresses/upd_block_street",
    deleteURL: "http://localhost:8181/ords/bdd_global/addresses/delete",
    delete: [
      {
        label: "Id address",
        type: "text",
        isRequired: true,
        id: "id_address",
        isFormDisplay: true,
      },
    ],
    update: [
      {
        label: "Id Address",
        type: "number",
        isRequired: true,
        id: "id_address",
        isFormDisplay: true,
      },
      {
        label: "Street",
        type: "text",
        isRequired: false,
        id: "street",
        isFormDisplay: true,
      },
      {
        label: "Block",
        type: "text",
        isRequired: false,
        id: "block",
        isFormDisplay: true,
      },
    ],
    attributes: [
      {
        label: "Id Address",
        type: "number",
        isRequired: false,
        id: "id_address",
        isFormDisplay: false,
      },
      {
        label: "Street",
        type: "string",
        isRequired: true,
        id: "street",
        isFormDisplay: true,
      },
      {
        label: "Block",
        type: "string",
        isRequired: true,
        id: "block",
        isFormDisplay: true,
      },
      {
        label: "Id City",
        type: "number",
        isRequired: true,
        id: "id_city",
        isFormDisplay: true,
      },
      {
        label: "City",
        type: "string",
        isRequired: false,
        id: "city",
        isFormDisplay: false,
      },
      {
        label: "Country",
        type: "string",
        isRequired: false,
        id: "country",
        isFormDisplay: false,
      },
      {
        label: "Id User",
        type: "number",
        isRequired: true,
        id: "id_user",
        isFormDisplay: true,
      },
      {
        label: "Username",
        type: "string",
        isRequired: false,
        id: "username",
        isFormDisplay: false,
      },
    ],
  },
  {
    tableName: "COUNTRY",
    id: "country",
    getURL: "http://localhost:8181/ords/bdd_global/countries/all_countries",
    postURL: "http://localhost:8181/ords/bdd_global/countries/insert",
    updateURL: "http://localhost:8181/ords/bdd_global/countries/upd_name",
    deleteURL: "http://localhost:8181/ords/bdd_global/countries/delete",
    delete: [
      {
        label: "Id country",
        type: "text",
        isRequired: true,
        id: "id_country",
        isFormDisplay: true,
      },
    ],
    update: [
      {
        label: "Id Country",
        type: "number",
        isRequired: true,
        id: "id_country",
        isFormDisplay: true,
      },
      {
        label: "Name",
        type: "text",
        isRequired: true,
        id: "name",
        isFormDisplay: true,
      },
    ],
    attributes: [
      {
        label: "Id Country",
        type: "number",
        isRequired: false,
        id: "id_country",
        isFormDisplay: false,
      },
      {
        label: "Name",
        type: "string",
        isRequired: true,
        id: "name",
        isFormDisplay: true,
      },
    ],
  },
  {
    tableName: "REVIEW",
    id: "review",
    getURL: "http://localhost:8181/ords/bdd_global/reviews/all_reviews",
    postURL: "http://localhost:8181/ords/bdd_global/reviews/insert",
    updateURL: "http://localhost:8181/ords/bdd_global/reviews/upd_comm_rat",
    deleteURL: "http://localhost:8181/ords/bdd_global/reviews/delete",
    delete: [
      {
        label: "Id book",
        type: "text",
        isRequired: true,
        id: "id_book",
        isFormDisplay: true,
      },
      {
        label: "Id user",
        type: "text",
        isRequired: true,
        id: "id_user",
        isFormDisplay: true,
      },
      {
        label: "Date",
        type: "text",
        isRequired: true,
        id: "review_date",
        isFormDisplay: true,
      },
    ],
    update: [
      {
        label: "Id book",
        type: "number",
        isRequired: true,
        id: "id_book",
        isFormDisplay: true,
      },
      {
        label: "Id user",
        type: "number",
        isRequired: true,
        id: "id_user",
        isFormDisplay: true,
      },
      {
        label: "Date",
        type: "date",
        isRequired: true,
        id: "review_date",
        isFormDisplay: true,
      },
      {
        label: "Comment",
        type: "text",
        isRequired: true,
        id: "review_comment",
        isFormDisplay: true,
      },
      {
        label: "Rating",
        type: "number",
        isRequired: true,
        id: "rating",
        isFormDisplay: true,
      },
    ],
    attributes: [
      {
        label: "Review Date",
        type: "date",
        isRequired: false,
        id: "review_date",
        isFormDisplay: false,
      },
      {
        label: "Id User",
        type: "number",
        isRequired: true,
        id: "id_user",
        isFormDisplay: true,
      },
      {
        label: "Id Book",
        type: "number",
        isRequired: true,
        id: "id_book",
        isFormDisplay: true,
      },
      {
        label: "Rating (1-5)",
        type: "number",
        isRequired: true,
        id: "rating",
        isFormDisplay: true,
      },
      {
        label: "Comment",
        type: "string",
        isRequired: true,
        id: "review_comment",
        isFormDisplay: true,
      },
    ],
  },
  {
    tableName: "CITY",
    id: "city",
    getURL: "http://localhost:8181/ords/bdd_global/cities/all_cities",
    postURL: "http://localhost:8181/ords/bdd_global/cities/insert",
    updateURL: "http://localhost:8181/ords/bdd_global/cities/upd_name",
    deleteURL: "http://localhost:8181/ords/bdd_global/cities/delete",
    delete: [
      {
        label: "Id city",
        type: "text",
        isRequired: true,
        id: "id_city",
        isFormDisplay: true,
      },
    ],
    update: [
      {
        label: "Id City",
        type: "number",
        isRequired: true,
        id: "id_city",
        isFormDisplay: true,
      },
      {
        label: "Name",
        type: "text",
        isRequired: true,
        id: "name",
        isFormDisplay: true,
      },
    ],
    attributes: [
      {
        label: "Id City",
        type: "number",
        isRequired: false,
        id: "id_city",
        isFormDisplay: false,
      },
      {
        label: "Name",
        type: "string",
        isRequired: true,
        id: "name",
        isFormDisplay: true,
      },
      {
        label: "Id Country",
        type: "number",
        isRequired: true,
        id: "id_country",
        isFormDisplay: true,
      },
      {
        label: "Country",
        type: "string",
        isRequired: false,
        id: "country",
        isFormDisplay: false,
      },
    ],
  },
];
