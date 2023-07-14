import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks"
import { getHeroesByName } from "../helpers/getHeroesByName"
import { HeroCard } from "../components"



export const SearchPage = () => {


    const navigate = useNavigate()

    const url = new URL(location.href)

    const name = url.searchParams.get('searchText')

    const heroes = getHeroesByName(name || '')

    const showSearch = name?.length === 0
    const showError = (name?.length > 0) && heroes.length === 0

    const { searchText, onInputChange } = useForm({
        searchText: name || ''
    })

    const onSubmitSearch = event => {
        event.preventDefault()

        navigate(`?searchText=${searchText}`)

    }

    return (
        <>
            <h1 className="text-5xl font-bold mb-8">
                Search
            </h1>

            <div className="flex gap-4">

                <div className="basis-2/5">
                    <h3 className="text-2xl font-bold mb-4">
                        Search
                    </h3>

                    <form
                        onSubmit={onSubmitSearch}
                        className="flex flex-col gap-3"
                    >
                        <input
                            type="search"
                            placeholder="Find your favorite hero"
                            className="border rounded p-3 block w-full"
                            name={`searchText`}
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button
                            className="inline-block px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded font-bold hover:bg-cyan-300 self-start"
                            type="submit"
                        >
                            Back
                        </button>
                    </form>
                </div>

                <div className="basis-3/5">
                    <h3 className="text-2xl font-bold">
                        Results
                    </h3>

                    <hr />

                    <div
                        className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"
                        style={{
                            display: showSearch ? `` : `none`
                        }}
                    >
                        Search Hero
                    </div>

                    <div
                        className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"
                        style={{
                            display: showError ? `` : `none`
                        }}
                    >
                        No hero with <b>{name}</b>
                    </div>

                    <div className="flex flex-col gap-4">


                        {
                            heroes.map(hero => (
                                <HeroCard
                                    key={hero.id}
                                    id={hero.id}
                                    superhero={hero.superhero}
                                    alter_ego={hero.alter_ego}
                                />
                            ))
                        }
                    </div>

                    {

                    }
                    {/* <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        Hero Search
                    </div>
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        No hero found
                    </div> */}
                </div>
            </div>
        </>
    )
}
