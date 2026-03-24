import React, { JSX } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const getRating = (rating: number): JSX.Element[] => {
  const ratingStar: JSX.Element[] = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(
        <FontAwesome key={i} name="star" size={10} color="#ffa41c" />
      );
    } else {
      ratingStar.push(
        <FontAwesome key={i} name="star-o" size={10} color="#ffa41c" />
      );
    }
  }

  // handle half star
  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = (
      <FontAwesome
        key={Math.floor(rating)}
        name="star-half-empty"
        size={10}
        color="#ffa41c"
      />
    );
  }

  return ratingStar;
};


