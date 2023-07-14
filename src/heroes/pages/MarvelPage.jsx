import { HeroList } from "../components"
import { getByHeroPublisher } from "../helpers"


export const MarvelPage = () => {

    


    return (
        <>
            <h1 className="text-5xl font-bold text-red-600 mb-8">
                Marvel Comics
            </h1>
            

            <HeroList 
                publisher={`Marvel Comics`}
            />
        </>
    )
}
