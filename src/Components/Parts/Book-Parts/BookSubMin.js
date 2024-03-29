import React from "react";

function BookSubMin(props) {
  return (
    <div className="book-container__week-list">
      <p className="book-list-duration">
        {props.wksOnLst !== 1
          ? props.wksOnLst + " Weeks On List..."
          : "New This Week"}
      </p>
    </div>
  );
}

export default BookSubMin;
