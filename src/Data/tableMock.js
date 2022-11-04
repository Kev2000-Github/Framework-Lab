import { faker } from '@faker-js/faker';

const fakerSeller = () => ({
  id: faker.datatype.uuid().substring(0, 5),
  seller: faker.name.firstName(),
  customer: faker.name.firstName(),
  created: faker.date.past(10),
  total: faker.finance.amount(),
});

// generate array of  faker sellers
export const generateTableData = (rows = 10) => Array.from({ length: rows }, () => fakerSeller());
