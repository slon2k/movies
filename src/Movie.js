import React from 'react'

const Movie = ({src, title, score, overview}) => {

    return (
        <div>
            <img src={src} style={styles.img} alt=""/>
            <div><strong>{title}</strong></div>
            <div>
                Score: {score}
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
        maxWidth: 100,
        height: 'auto'
    }
}

export default Movie