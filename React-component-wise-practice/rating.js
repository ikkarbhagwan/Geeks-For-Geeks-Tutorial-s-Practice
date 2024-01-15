import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <p>Rating: {rating}</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          selected={star <= rating}
          onClick={() => handleRatingClick(star)}
        />
      ))}
    </div>
  );
};

const Star = ({ selected, onClick }) => {
  return (
    <span
      style={{ cursor: 'pointer', color: selected ? 'orange' : 'gray' }}
      onClick={onClick}
    >
      ★
    </span>
  );
};

export default Rating;
