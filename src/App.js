import React from 'react';
import Section from "./Section";
import Api from "./Api";

const genres = ['trending', 'sciFi', 'comedy']

export default class App extends React.Component {

    state = {
        loading: true,
        movies: {}
    }

    api = new Api();

    componentDidMount() {


        genres.forEach((genre)=> {
            this.api.getMovies({genre})
                .then(({results}) => this.addMovies({moviesToAdd: results, genre}))
                .catch(console.log)
        })
    }

    addMovies({moviesToAdd, genre}) {
        const {movies} = this.state;
        const items = movies[genre] !== undefined ? [...movies[genre].items, ...moviesToAdd] : [...moviesToAdd];
        movies[genre] = {total: null, items: items};
        this.setState({movies});
    }


    render(){
        console.log(this.state);
        return (
            <div>
                <h2>App</h2>
                <Section sectionTitle={'Movies'} />

            </div>
        );
    }
}