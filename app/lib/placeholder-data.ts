// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const providers = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "ООО «Иксора-Трейд»",
    inn: "7701234567",
    phone: "+7 (495) 123-45-67",
    site: "https://ixora-trade.ru",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "ООО «Комус»",
    inn: "7707654321",
    phone: "+7 (495) 765-43-21",
    site: "https://www.komus.ru",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "ООО «Оптлист»",
    inn: "7700987654",
    phone: "+7 (495) 111-22-33",
    site: "https://optlist.ru	",
  },
];

const products = [
  {
    id: "ba351ebd-b01e-4580-a159-d3e235e96c2f",
    name: "Тормозные колодки",
    provider_id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    price: 1200,
    article: "BRK123",
  },
  {
    id: "ae8c2011-d6a6-4ed4-9eed-c4e2cbb189ee",
    name: "Масляный фильтр",
    provider_id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    price: 450,
    article: "FLT789",
  },
  {
    id: "a9ae78dc-9cf3-4098-8807-34bf5e4c21cd",
    name: "Бумага А4",
    provider_id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    price: 300,
    article: "PPR456",
  },
];

const storage = [
  {
    id: "2595f543-3c66-4984-b5d4-72234f38ca4b",
    product_id: "ba351ebd-b01e-4580-a159-d3e235e96c2f",
    count: 25,
  },
  {
    id: "5200bf60-32c4-4972-8639-8ea1f662a7a1",
    product_id: "ae8c2011-d6a6-4ed4-9eed-c4e2cbb189ee",
    count: 40,
  },
  {
    id: "34bd7549-a51a-4596-a2b4-6925ff965311",
    product_id: "a9ae78dc-9cf3-4098-8807-34bf5e4c21cd",
    count: 500,
  },
];

const invoices = [
  {
    created_at: "4-20-2025",
    delivery_date: "4-22-2025",
    provider_id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    docs_url: null,
    status: true,
    payment_status: true,
    order_details: [
      {
        product_id: "ba351ebd-b01e-4580-a159-d3e235e96c2f",
        count: 10,
      },
      {
        product_id: "ae8c2011-d6a6-4ed4-9eed-c4e2cbb189ee",
        count: 20,
      },
    ],
  },
  {
    created_at: "4-22-2025",
    delivery_date: null,
    provider_id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    docs_url: null,
    status: true,
    payment_status: true,
    order_details: [
      {
        product_id: "a9ae78dc-9cf3-4098-8807-34bf5e4c21cd",
        count: 100,
      },
    ],
  },
];

export { providers, invoices, storage, products };
