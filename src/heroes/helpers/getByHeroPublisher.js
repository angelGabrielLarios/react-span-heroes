import { heroes } from "../data"

export const getByHeroPublisher = (publisher) => {
    

    /* opciones  */
    const validPublishers = ['DC Comics','Marvel Comics']

    /* si no coincide arroja un error! */
    if(!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not validate publisher`)
    }

    /* devuelve el array con los heroes que coinciden con la condición */
    return heroes.filter(hero => hero.publisher === publisher)
    
}
