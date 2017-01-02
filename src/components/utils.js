import { NAMES } from './data';

const SIZE = NAMES.length;
console.log('Length is:', SIZE);

function random() {
    return Math.floor(Math.random() * SIZE)
}

export function randomName() {
    return NAMES[random()] + NAMES[random()];
}
