export type Field = {
  label: string;
  type: string;
  isFormDisplay: boolean;
  isRequired: boolean;
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
export const horizontalEXEUFieldsConfig: Table[] = [
  {
    tableName: "USER_EXEU",
    id: "user_tam_exeu",
    getURL: "http://localhost:8181/ords/bdd/users/all_users",
    attributes: [
      {
        label: "Id User",
        type: "number",
        isFormDisplay: true,
        isRequired: false,
        id: "id_user",
      },
      {
        label: "Name",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "name",
      },
      {
        label: "Email",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "email",
      },
      {
        label: "Password",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "password",
      },
     
    ],
  },
  {
    tableName: "ORDER_EXEU",
    id: "order_exeu",
    getURL: "http://localhost:8181/ords/bdd/orders/all_orders",
    updateURL: "http://localhost:8181/ords/bdd/orders/upd_status",
    postURL: "http://localhost:8181/ords/bdd/orders/insert",
    update: [
      {
        label: "Id Order",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_order",
      },
      {
        label: "Status",
        type: "select",
        isFormDisplay: true,
        isRequired: true,
        id: "status",
        options: ["Shipped", "Completed", "Cancelled"],
      },
    ],
    deleteURL: "http://localhost:8181/ords/bdd/orders/delete",
    delete: [
      {
        label: "Id order",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "id_order",
      },
    ],
    attributes: [
      {
        label: "Id Order",
        type: "number",
        isFormDisplay: false,
        isRequired: false,
        id: "id_order",
      },
      {
        label: "Name",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "name",
      },
      {
        label: "Id User",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_user",
      },
      {
        label: "Id Address",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_address",
      },
      {
        label: "Date",
        type: "date",
        isFormDisplay: false,
        isRequired: false,
        id: "order_date",
      },
      {
        label: "Total Price",
        type: "number",
        isFormDisplay: false,
        isRequired: false,
        id: "total_price",
      },
      {
        label: "Status",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "status",
      },
      {
        label: "Street",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "street",
      },
      {
        label: "Block",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "block",
      },
      {
        label: "City",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "city",
      },
      {
        label: "Country",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "country",
      },
    ],
  },
  {
    tableName: "ORDER_DETAILS_EXEU ",
    id: "order_details_exeu",
    //getURL: "url de get",
    postURL: "http://localhost:8181/ords/bdd/orderdetails/insert",
    updateURL: "http://localhost:8181/ords/bdd/orderdetails/quantity_upd",
    deleteURL: "http://localhost:8181/ords/bdd/orderdetails/delete",
    gets:[
      {
        type:'text',
        param:'idorder',
        url:'http://localhost:8181/ords/bdd/orderdetails/all_orderdetails',
         label:'get all order details by order'
      },],
    delete: [
      {
        label: "Id order",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "id_order",
      },
      {
        label: "Id book",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "id_book",
      },
    ],
    update: [
      {
        label: "Id Order",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_order",
      },
      {
        label: "Id Book",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_book",
      },
      {
        label: "Quantity",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "quantity",
      },
    ],

    attributes: [
      {
        label: "Id Book",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_book",
      },
      {
        label: "Id Order",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_order",
      },
      {
        label: "Quantity",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "quantity",
      },
      {
        label: "Price",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "price",
      },
      {
        label: "Discount",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "discount",
      },
    ],
  },
  {
    tableName: "BOOK_EXEU",
    id: "book_exeu",
    getURL: "http://localhost:8181/ords/bdd/books/all_books",
    updateURL: "http://localhost:8181/ords/bdd/books/price_upd",
    postURL: "http://localhost:8181/ords/bdd/books/insert",
    deleteURL: "http://localhost:8181/ords/bdd/books/delete",
    delete: [
      {
        label: "Id book",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_book",
      },
    ],
    update: [
      {
        label: "Id Book",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "idBook",
      },
      {
        label: "Price",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "price",
      },
    ],
    attributes: [
      {
        label: "Id Book",
        type: "number",
        isFormDisplay: false,
        isRequired: false,
        id: "id_book",
      },
      {
        label: "Name",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "name",
      },
      {
        label: "Price",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "price",
      },
      {
        label: "Stock Status",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "stock_status",
      },
      {
        label: "Year",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "year",
      },
      {
        label: "Description",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "description",
      },
      {
        label: "Serie",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_serie",
      },
      {
        label: "Publisher",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_publisher",
      },
      {
        label: "Category",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "id_category",
      },
      {
        label: "Author",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_author",
      },
    ],
  },
  {
    tableName: "ADDRESS_EXEU",
    id: "address_exeu",
    getURL: "http://localhost:8181/ords/bdd/addresses/all_address",
    postURL: "http://localhost:8181/ords/bdd/addresses/insert",
    updateURL: "http://localhost:8181/ords/bdd/addresses/upd_block_street",
    deleteURL: "http://localhost:8181/ords/bdd/addresses/delete",
    delete: [
      {
        label: "Id address",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "id_address",
      },
    ],
    update: [
      {
        label: "Id Address",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_address",
      },
      {
        label: "Street",
        type: "text",
        isFormDisplay: true,
        isRequired: false,
        id: "street",
      },
      {
        label: "Block",
        type: "text",
        isFormDisplay: true,
        isRequired: false,
        id: "block",
      },
    ],
    attributes: [
      {
        label: "Id Address",
        type: "number",
        isFormDisplay: false,
        isRequired: false,
        id: "id_address",
      },
      {
        label: "Street",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "street",
      },
      {
        label: "Block",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "block",
      },
      {
        label: "Id City",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_city",
      },
      {
        label: "City",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "city",
      },
      {
        label: "Country",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "country",
      },
      {
        label: "Id User",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_user",
      },
      {
        label: "Username",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "username",
      },
    ],
  },
  {
    tableName: "COUNTRY_EXEU",
    id: "country_exeu",
    getURL: "http://localhost:8181/ords/bdd/countries/all_countries",
    postURL: "http://localhost:8181/ords/bdd/countries/insert",
    updateURL: "http://localhost:8181/ords/bdd/countries/name_upd",
    deleteURL: "http://localhost:8181/ords/bdd/countries/delete",
    delete: [
      {
        label: "Id country",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "id_country",
      },
    ],
    update: [
      {
        label: "Id Country",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_country",
      },
      {
        label: "Name",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "name",
      },
    ],
    attributes: [
      {
        label: "Id Country",
        type: "number",
        isFormDisplay: false,
        isRequired: false,
        id: "id_country",
      },
      {
        label: "Name",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "name",
      },
    ],
  },
  {
    tableName: "CITY_EXEU",
    id: "city_exeu",
    getURL: "http://localhost:8181/ords/bdd/cities/all_cities",
    postURL: "http://localhost:8181/ords/bdd/cities/insert",
    updateURL: "http://localhost:8181/ords/bdd/cities/upd_name",
    deleteURL: "http://localhost:8181/ords/bdd/cities/delete",
    delete: [
      {
        label: "Id city",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "id_city",
      },
    ],
    update: [
      {
        label: "Id City",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_city",
      },
      {
        label: "Name",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "name",
      },
    ],
    attributes: [
      {
        label: "Id City",
        type: "number",
        isFormDisplay: false,
        isRequired: false,
        id: "id_city",
      },
      {
        label: "Name",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "name",
      },
      {
        label: "Id Country",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_country",
      },
      {
        label: "Country",
        type: "string",
        isFormDisplay: false,
        isRequired: false,
        id: "country",
      },
    ],
  },
  {
    tableName: "REVIEW_EXEU",
    id: "review_exeu",
    getURL: "http://localhost:8181/ords/bdd/reviews/all_reviews",
    postURL: "http://localhost:8181/ords/bdd/reviews/insert",
    updateURL: "http://localhost:8181/ords/bdd/reviews/upd_comm_rat",
    deleteURL: "http://localhost:8181/ords/bdd/reviews/delete",
    delete: [
      {
        label: "Id book",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "id_book",
      },
      {
        label: "Id user",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "id_user",
      },
      {
        label: "Date",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "review_date",
      },
    ],
    update: [
      {
        label: "Id book",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_book",
      },
      {
        label: "Id user",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_user",
      },
      {
        label: "Date",
        type: "date",
        isFormDisplay: true,
        isRequired: true,
        id: "review_date",
      },
      {
        label: "Comment",
        type: "text",
        isFormDisplay: true,
        isRequired: true,
        id: "review_comment",
      },
      {
        label: "Rating",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "rating",
      },
    ],
    attributes: [
      {
        label: "Review Date",
        type: "date",
        isFormDisplay: false,
        isRequired: false,
        id: "review_date",
      },
      {
        label: "Id User",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_user",
      },
      {
        label: "Id Book",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_book",
      },
      {
        label: "Rating (1-5)",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "rating",
      },
      {
        label: "Comment",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "review_comment",
      },
    ],
  },
];
