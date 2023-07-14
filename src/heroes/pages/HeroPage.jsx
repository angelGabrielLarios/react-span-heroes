import { Link, useNavigate, useParams } from "react-router-dom"
import { getByHeroId } from "../helpers/getByHeroId"

export const HeroPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const heroById = getByHeroId(id)


    const onClickBack = () => navigate(-1)
    
    return (
        <div className="flex shadow overflow-hidden rounded-lg w-3/5">
            <div className="basis-1/4 slide-in-blurred-left">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={`${id}
                    image`}
                    className="h-full object-cover"
                />
            </div>
            <div className="p-8">
                <h2 className="text-3xl font-bold">
                    {heroById.superhero}
                </h2>
                <div className="p-6">
                    <p>
                        <strong className="font-black">Alter ego:</strong> ${heroById.alter_ego}
                    </p>

                    <p>
                        <strong className="font-black">Publisher:</strong> ${heroById.publisher}
                    </p>

                    <p>
                        <strong className="font-black">First apparence:</strong> ${heroById.first_appearance}
                    </p>

                    
                </div>

                
                <h2 className="text-3xl font-bold mb-3">
                    Characters
                </h2>
                <p className="mb-4">
                    {heroById.characters}
                </p>

                <button
                    className="inline-block px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded font-bold hover:bg-cyan-300"
                    onClick={onClickBack}
                >
                    Back
                </button>
            </div>
        </div>
    )
}
