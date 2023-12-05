import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const ReviewList = () => {
  const { reviews, dispatch } = useContext(MovieContext);
  const [editReview, setEditReview] = useState({ id: null, text: '', movieName: '', url: '' });

  const handleDeleteReview = (id) => {
    dispatch({ type: 'DELETE_REVIEW', payload: id });
  };

  const handleEditReview = (review) => {
    setEditReview(review);
  };

  const handleSaveEdit = () => {
    dispatch({ type: 'EDIT_REVIEW', payload: editReview });
    setEditReview({ id: null, text: '', movieName: '', url: '' });
  };

  return (
    <div>
      <h2><b>ALL REVIEWS</b></h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {editReview.id === review.id ? (
              <>
                <label className='m-3'>
                  Movie Name:
                  <input 
                  style={{padding: '10px' , borderRadius: '8px', backgroundColor: '#fff', color:'#000'}}
                    type="text"
                    value={editReview.movieName}
                    onChange={(e) => setEditReview({ ...editReview, movieName: e.target.value })}
                  />
                </label>
                <label className='m-3'>
                  Text:
                  <input
                  style={{padding: '10px' , borderRadius: '8px', backgroundColor: '#fff', color:'#000'}}
                    type="text"
                    value={editReview.text}
                    onChange={(e) => setEditReview({ ...editReview, text: e.target.value })}
                  />
                </label>
                <label className='m-3'>
                  URL:
                  <input
                  style={{padding: '10px' , borderRadius: '8px', backgroundColor: '#fff', color:'#000'}}
                    type="text"
                    value={editReview.url}
                    onChange={(e) => setEditReview({ ...editReview, url: e.target.value })}
                  />
                </label>
                <button onClick={handleSaveEdit} style={{padding: '10px' , borderRadius: '8px', backgroundColor: '#348feb', color:'#fff'}}>Save</button>
              </>
            ) : (
              <>
                <strong>{review.movieName}</strong>: {review.text}{' '}
                <a
  href={review.url}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    maxWidth: '400px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }}
>
  {review.url}
</a>
                <button className='m-3'onClick={() => handleEditReview(review)} style={{padding: '10px' , borderRadius: '8px', backgroundColor: '#ebde34', color:'#000'}}>Edit</button>
                <button  className='m-3'onClick={() => handleDeleteReview(review.id)} style={{padding: '10px' , borderRadius: '8px', backgroundColor: '#eb3434', color:'#fff'}}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
