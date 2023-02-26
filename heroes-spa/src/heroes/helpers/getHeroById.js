import { heroes } from './../data/heroes';

export const getHeroById = (id) => {
    // si el find no encuentra nada entonces regresa undefined
    return heroes.find( hero => hero.id === id);
}