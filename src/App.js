import React from 'react';
import Section from "./Section";

const genres = {
    trending: 'Trending Now',
    sciFi: 'Sci-Fi Hits',
    comedy: 'Comedy Hits'
}

const App = () => {
    const sections = Object.keys(genres).map((genre) => (<Section genre={genre} title={genres[genre]} key={genre}/>));

    return (
        <div>
            {sections}
        </div>
    )
}

export default App