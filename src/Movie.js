import React from 'react'

const Movie = ({movie}) => {
    const {title, vote_average, overview, backdrop_path} = movie;
    const src = `http://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div>
            <img src={src} style={styles.img} alt=""/>
            <div><strong>{title}</strong></div>
            <div>
                Score: {vote_average}
            </div>
            <div>
                <details>
                    <summary>Overview</summary>
                    {overview}
                </details>
            </div>
        </div>
    )
}

const styles = {
    img: {
        maxWidth: 120,
        height: 'auto'
    }
}

export default Movie