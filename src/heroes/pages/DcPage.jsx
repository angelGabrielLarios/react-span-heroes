import { HeroList } from "../components"


export const DcPage = () => {


    return (
        <>

            <h1 className="text-5xl font-bold text-blue-600 mb-8">
                DC Comics
            </h1>
            
            <HeroList 
                publisher={`DC Comics`}
            />

           
        </>
    )
}
