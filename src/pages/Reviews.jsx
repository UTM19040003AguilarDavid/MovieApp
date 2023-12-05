import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Review = () => {
    const { reviews } = useContext(MovieContext);

    return (
        <div>
            <h2><b>MOVIE CARDS</b></h2>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {reviews.map((review) => (
                    <div className="card h-96 w-96 text-primary-content shadow-xl m-4" style={{ backgroundColor: '#e7e7e7', padding: '10px' }} key={review.id}>
                        <div className="movie-card">
                            <figure>
                                <img src={review.url} alt="Descripción de la imagen" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            </figure>
                            <h3><b>Movie name:</b> {review.movieName}</h3>
                            <p><b>Review: </b>{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Review;
