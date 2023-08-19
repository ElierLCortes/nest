
export let name = 'Elier';
export const age: number = 35;
export const isValid: boolean = true;

name = 'melissa';

export const templateString = `Esto es un
string multilinea
expresiones ${1 + 1}
age ${age}
inyectar valores ${name}
booleanos ${isValid}`

console.log(templateString);