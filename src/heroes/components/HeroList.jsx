import { getByHeroPublisher } from "../helpers"
import { HeroCard } from "./HeroCard"

export const HeroList = ({publisher}) => {

    const heroesFilter = getByHeroPublisher(publisher)
    
    return (
        
        <div className="grid grid-cols-3 gap-4">
            {
                heroesFilter.map(hero => (
                    <HeroCard
                        key={hero.id}
                        id={hero.id}
                        alter_ego={hero.alter_ego}
                        superhero={hero.superhero}
                    />
                ))
            }
        </div>
    )
}
