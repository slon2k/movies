const URL_BASE = "https://api.themoviedb.org/3"
const KEY = "87dfa1c669eea853da609d4968d294be"
const URL = {
    trending: "/discover/movie",
    sciFi: "/genre/878/movies",
    comedy: "/genre/35/movies",
}

export default class Api {
    async getMovies({genre, page=1, sort='popularity.desc'}) {
        const result = await fetch(`${URL_BASE}${URL[genre]}?api_key=${KEY}&sort_by=${sort}&page=${page}`);

        if (!result.ok) {
            throw new Error(`Unable to get data : ${result.status}`)
        }

        return await result.json()
    }

}