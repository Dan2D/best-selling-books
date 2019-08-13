import React from 'react'
import StarRating from "react-rating";

function Rating(props) {
    return (
        <>
        {props.rating === 0 ? (
          "No Rating Available"
        ) : (
          <div>
            <StarRating
              className="book-container__ratings"
              initialRating={props.rating}
              emptySymbol="far fa-star fa-lg"
              fullSymbol="fas fa-star fa-lg"
              fractions={2}
              readonly
            />
            {props.rating}
          </div>
        )}
      </>
    )
}

export default Rating
