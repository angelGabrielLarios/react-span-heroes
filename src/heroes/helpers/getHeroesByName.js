import { heroes } from "../data"


export const getHeroesByName = (name='') => {
    

    /* 
    transformar el argumento a minusculas 
    y quitar los espacios
    */        

    name = name.toLowerCase().trim()


    /* si el name es vacio devolver un arreglo vacio */
    if(!name) return []


    const heroesFilter = heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )
    

    return heroesFilter

}
