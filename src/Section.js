import React from 'react'
import Movie from "./Movie";
import Api from "./Api";

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
        const {movies} = this.state;
        const sectionTitle = genre;
        const movieList = movies.map((movie) => (<Movie movie={movie} key={movie.id}/>))

        return(
            <section>
                <header>
                    <h3>{sectionTitle}</h3>
                </header>
                {movieList}

            </section>
        )
    }
}