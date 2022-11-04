/* eslint-disable max-len */
import { randomNumber } from '../Utils/common';

const MIN = 1000;
const MAX = 10000000;

export const labels = ['15', '16', '17', '18', '19', '20', '21'];
export const dataProjection = [0, ...new Array(labels.length - 1).fill(0).map(() => randomNumber(MIN, MAX))];
// obtener un numero mayor a la proyeccion por un 5 a 15%
export const dataReal = dataProjection.map((num) => (num === 0 ? 0 : num + (num * randomNumber(10, 30)) / 100));
