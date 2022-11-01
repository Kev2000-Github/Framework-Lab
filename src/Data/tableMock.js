import { faker } from "@faker-js/faker";

const fakerSeller = () => {
  return {
    id: faker.datatype.uuid().substring(0,5),
    seller: faker.name.firstName(),
    customer: faker.name.firstName(),
    created: faker.date.past(10),
    total: faker.finance.amount(),
  };
};
export const generateTableData = (rows = 10) => {
  //generate array of  faker sellers 
  return Array.from({ length: rows }, () => fakerSeller());
};
