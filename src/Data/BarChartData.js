import { randomNumber } from '../Utils/common';

export const web = Array.from({ length: 5 }, () => randomNumber(0, 800));
export const app = Array.from({ length: 5 }, () => randomNumber(0, 800));
export const labels = ['17', '18', '19', '20', '21'];
