import { getByHeroPublisher } from "../helpers"


export const MarvelPage = () => {

    const heroesMarvel = getByHeroPublisher('Marvel Comics')
    return (
        <>
            <h1 className="text-5xl font-bold text-red-600">
                Marvel Comics
            </h1>
            <hr />

            <ul>
                {
                    heroesMarvel.map(hero => (
                        <li key={hero.id}> 
                            {hero.superhero}    
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
