import { heroes } from "../data"

export const getByHeroId = (id) => {
    const heroById = heroes.find(hero => hero.id === id)
    return heroById
}
