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
  getURL?: string; //url pt get all
  postURL?: string; //url pentru post
  updateURL?: string; //url pentru update
  deleteURL?: string;
  gets?: {
    //url-uri de get daca vrei sa faci 2 geturi cu fielduri diferite
    type: string;
    label: string;
    url: string;
    param?: string;
  }[];
  update?: Field[];
  delete?: Field[];
};

export const horizontalEUFieldsConfig: Table[] = [
  {
    tableName: "USER_EU",
    id: "user_tam_eu",
    getURL: "http://localhost:8181/ords/dwbi_miruna/users/all_users",
    attributes: [
      {
        label: "Id User",
        type: "number",
        isFormDisplay: false,
        isRequired: false,
        id: "id_user",
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
    tableName: "ORDER_EU",
    id: "order_eu",
    getURL: "http://localhost:8181/ords/bdeu/bddeuu/orderseu/all_orders",
    updateURL: "http://localhost:8181/ords/bdeu/bddeuu/orderseu/upd_status",
    postURL: "http://localhost:8181/ords/bdeu/bddeuu/orderseu/insert",
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
    deleteURL: "http://localhost:8181/ords/bdeu/bddeuu/orderseu/delete",
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
    tableName: "ORDER_DETAILS_EU ",
    id: "order_details_eu",
    //getURL: "url de get",
    postURL: "http://localhost:8181/ords/bdeu/bddeuu/orderdetails/insert",
    updateURL: "http://localhost:8181/ords/bdeu/bddeuu/orderdetails/quantity_upd",
    deleteURL: "delete URL",
    gets:[
      {
        type:'text',
        param:'idorder',
        url:'http://localhost:8181/ords/bdeu/bddeuu/orderdetails/all_orderdetails',
         label:'get all order details by order'
      },],
    delete: [
      {
        label: "Id order",
        type: "number",
        isFormDisplay: true,
        isRequired: true,
        id: "id_order",
      },
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
    tableName: "BOOK_EU",
    id: "book_eu",
    getURL: "http://localhost:8181/ords/dwbi_miruna/books/all_books",
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
        id: "book",
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
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "serie",
      },
      {
        label: "Publisher",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "publisher",
      },
      {
        label: "Category",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "category",
      },
      {
        label: "Firstname Author",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "firstname",
      },
      {
        label: "Lastname Author",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "lastname",
      },
      {
        label: "Id Serie",
        type: "number",
        isFormDisplay: true,
        isRequired: false,
        id: "id_serie",
      },
      {
        label: "Id Author",
        type: "number",
        isFormDisplay: true,
        isRequired: false,
        id: "id_author",
      },
      {
        label: "Id Publisher",
        type: "number",
        isFormDisplay: true,
        isRequired: false,
        id: "id_publisher",
      },
      {
        label: "Id Category",
        type: "number",
        isFormDisplay: true,
        isRequired: false,
        id: "id_category",
      },
      {
        label: "Email Publisher",
        type: "string",
        isFormDisplay: true,
        isRequired: true,
        id: "email_publisher",
      },
    ],
  },
  {
    tableName: "ADDRESS_EU",
    id: "address_eu",
    getURL: "http://localhost:8181/ords/bdeu/bddeuu/addresses/all_address",
    postURL: "http://localhost:8181/ords/bdeu/bddeuu/addresses/insert",
    updateURL: "http://localhost:8181/ords/bdeu/bddeuu/addresses/upd_block_street",
    deleteURL: "http://localhost:8181/ords/bdeu/bddeuu/addresses/delete",
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
    tableName: "COUNTRY_EU",
    id: "country_eu",
    getURL: "http://localhost:8181/ords/bdeu/bddeuu/countrieseu/all_countries",
    postURL: "http://localhost:8181/ords/bdeu/bddeuu/countrieseu/insert",
    updateURL: "http://localhost:8181/ords/bdeu/bddeuu/countrieseu/name_upd",
    deleteURL: "http://localhost:8181/ords/bdeu/bddeuu/countrieseu/delete",
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
    tableName: "CITY_EU",
    id: "city_eu",
    getURL: "http://localhost:8181/ords/bdeu/bddeuu/citieseu/all_cities",
    postURL: "http://localhost:8181/ords/bdeu/bddeuu/citieseu/insert",
    updateURL: "http://localhost:8181/ords/bdeu/bddeuu/citieseu/name_upd",
    deleteURL: "http://localhost:8181/ords/bdeu/bddeuu/citieseu/delete",
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
    tableName: "REVIEW_EU",
    id: "review_eu",
    getURL: "http://localhost:8181/ords/dwbi_miruna/reviews/all_reviews",

    attributes: [
      {
        label: "Review Date",
        type: "date",
        isFormDisplay: true,
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
