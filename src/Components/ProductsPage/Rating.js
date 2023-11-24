import React, { useState } from 'react';
import styles from "./ProductPage.module.css";

const Rating = ({ initialRating = 5, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className={styles.star}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingClick(star)}
          style={{
            cursor: 'pointer',
            color: star <= rating ? '#F56630' : '',
           
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
