import { heroes } from './../data/heroes';


export const getHeroesByName = ( name = '' ) => {
    // trim para eliminar espacios en blanco
    name = name.toLocaleLowerCase().trim();

    // si no escribe nada devuelve un arreglo vacio
    if (name.length === 0) return [];

    //se filtra el heroes basado en el nombre
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    );
}