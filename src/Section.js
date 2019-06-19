import React from 'react'
import Movie from "./Movie";
import Api from "./Api";

const ITEMS_PER_PAGE = 20

const spinner = () => {
    return <div>Loading ...</div>
}

export default class Section  extends React.Component {

    state = {
        loading: true,
        total: null,
        movies: []
    }

    addMovies({moviesToAdd}) {
        const {movies} = this.state;
        this.setState({movies: [...movies, ...moviesToAdd], loading: false});
    }

    setTotal({total}) {
        this.setState({total});
    }

    api = new Api();

    loadMore = () => {
        const {genre} = this.props;
        const {total} = this.state;
        const itemsLoaded = this.state.movies.length;
        if (itemsLoaded < total) {
            const page = itemsLoaded / ITEMS_PER_PAGE + 1;
            this.api.getMovies({genre, page})
                .then(({results})=>(this.addMovies({moviesToAdd: results})))
                .catch(console.log)
        }
    }

    componentDidMount() {
        const {genre} = this.props;
        this.api.getMovies({genre})
            .then(({results, total_results}) => {
                this.setTotal({total: total_results});
                this.addMovies({moviesToAdd: results})
            })
            .catch(console.log)
    }

    render() {
        console.log(this.state);
        const {genre} = this.props;
        const {movies, loading, total} = this.state;
        const sectionTitle = genre;
        const itemsLoaded = movies.length;
        const movieList = movies.map((movie) => (<Movie movie={movie} key={movie.id}/>))

        return(
            <section>
                <header>
                    <h2>{sectionTitle}</h2>
                </header>
                { loading && spinner()}
                {movieList}
                { (itemsLoaded < total) &&
                    <button type={"Button"} onClick={this.loadMore}>
                        Load more ...
                    </button>
                }
            </section>
        )
    }
}