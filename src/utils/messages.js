import { capitalize } from './index';

export const empty = (name) => `${capitalize(name)} não pode ser vazio.`;
export const letters = (name) => `${capitalize(name)} só pode conter letras.`;
export const email = (name) => `${capitalize(name)} não é um e-mail válido.`;
export const phone = (name) => `${capitalize(name)} deve ter DDD e 8 ou 9 números.`;
