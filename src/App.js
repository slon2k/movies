import React from 'react';
import Section from "./Section";

const genres = {
    trending: 'Trending Now',
    sciFi: 'Sci-Fi Hits',
    comedy: 'Comedy Hits'
}

export default class App extends React.Component {

    state = {

    }


    render() {
        const sections = Object.keys(genres).map((genre) => (<Section genre={genre} title={genres[genre]} key={genre}/>))

        return (
            <div>
                <h2>App</h2>
                {sections}
            </div>
        );
    }
}