import React from 'react'
import Movie from "./Movie";

const Section = ({sectionTitle}) => {
    return(
        <section>
            <header>
                <h3>{sectionTitle}</h3>
            </header>
            <Movie
                src = "http://image.tmdb.org/t/p/original/uovH5k4BAEPqXqxgwVrTtqH169g.jpg"
                title = 'Godzilla: King of the Monsters'
                score = '6.4'
                overview = "The new story follows the heroic efforts of the crypto-zoological agency Monarch as its
                members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides
                with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.
                When these ancient super-species—thought to be mere myths—rise again, they all vie for supremacy,
                leaving humanity’s very existence hanging in the balance"
            />

        </section>
    )

}

export default Section