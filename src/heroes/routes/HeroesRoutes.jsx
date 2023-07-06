import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"



export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <section className="md:container mx-auto py-10">
                {/* <h1 className="text-5xl font-bold text-center">HeroesRoutes</h1> */}


                <Routes>

                    <Route
                        path="marvel"
                        element={<MarvelPage />}
                    />

                    <Route
                        path="dc"
                        element={<DcPage />}
                    />

                    <Route
                        path="search"
                        element={<SearchPage />}
                    />

                    <Route
                        path="hero/:id"
                        element={<HeroPage />}
                    />

                    <Route
                        path="/"
                        element={<Navigate to={`/marvel`}/>}
                    />
                </Routes>
            </section>
        </>
    )
}
