import React from 'react';
import Section from "./Section";

const genres = ['trending', 'sciFi', 'comedy']

export default class App extends React.Component {

    state = {

    }


    render() {
        const sections = genres.map((genre) => (<Section genre={genre} key={genre}/>))

        return (
            <div>
                <h2>App</h2>
                {sections}
            </div>
        );
    }
}