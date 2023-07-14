import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    
}) => {
    return (
       
        <div className="flex shadow rounded-lg overflow-hidden slide-in-fwd-center">
            <div className="basis-24">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={`${id} image`}
                />
            </div>
            <div className="grow p-4">
                <h3 className="text-2xl font-bold mb-2">
                    {superhero}
                </h3>
                <p className="mb-4 text-base">
                    {alter_ego}
                </p>

                <Link to={`/hero/${id}`} className="text-blue-600">Mas...</Link>
            </div>
        </div>        
    )
}
